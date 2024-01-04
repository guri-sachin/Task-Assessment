import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Category from "./Component/AdminDashboard/Category";
import AddProduct from "./Component/AdminDashboard/AddProduct";
import Home from "./Component/Mainpage/Home";


function App() {
  return (
    <div>
      <Router>
        <Routes>
       
          <Route exact path="/" element={<Home />}></Route>
         <Route exact path="/Product" element={<Category/>}></Route>
         <Route exact path="/AddProduct" element={<AddProduct/>}></Route>
        
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
