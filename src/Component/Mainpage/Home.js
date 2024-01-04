import React, { useState, useEffect } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {


    // Fetch initial product data
    fetch('http://localhost:3305/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts


  return (
    <div>
     <h2 style={{color:"black",fontFamily:"cursive",margin:"10px"}}><center>All PRODUCTS</center></h2>
     <div style={{ display: "flex", flexWrap: "wrap" ,margin:"30px"}}>
        {
          products.map((product =>
            <div key={product.id} class="product-card" style={{ margin: "10px" }}>
              <div class="badge">{product.name}</div>
              <div class="product-tumb">
                <img src={product.fillname} alt=""  width="100" height="80" />
              </div>
              <div class="product-details">
                <span class="product-catagory">{product.name}</span>
                
                <p>Lorem ipsum dolor sit amet,!</p>
                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>$96.00</small>
                    {product.price}
                  </div>
                  <div class="product-links">
                    <a href="">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
                      
 

    </div>
  );
};

export default Home;
