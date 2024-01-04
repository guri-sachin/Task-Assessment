const express = require('express');
const http = require('http');
const mysql = require('mysql');
const cors = require("cors");
const multer = require('multer');
const bodyParser =require('body-parser');

const path =require("path");
const app = express();
app.use(express.json());
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));






//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kids'
});



//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination:'./photo',
  filename:(req,file,cb)=>{
   return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
   })
   const upload = multer({
   storage:storage
   })
 app.use("/filename",express.static("photo"))




 //route for products 
app.get('/products',(req,res) =>{
  let sql ="SELECT * FROM products";
  let query =conn.query (sql,(err,results)=>{
      if (err) {
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
              }
  });
});

// API endpoint for uploading image, name, and price
app.post('/api/Product', upload.single('filename'),  (req, res) => {
  const { name, price } = req.body;

  try {
    const sql = 'INSERT INTO products (name, price, filename) VALUES (?, ?, ?)';
    const result =  conn.query(sql, [name, price, req.file.filename]);

    res.status(200).json({ success: true, data: {name, price, filename: req.file.filename } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});




//route for delete products
app.delete('/productdelete/:id',function(req,res){
  const id=req.params.id;
  console.log(id);
  
  let sql ="DELETE FROM products WHERE id="+id;
  let query =conn.query(sql, (err,results)=>{
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
      });
});





const PORT = process.env.PORT || 3305;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
