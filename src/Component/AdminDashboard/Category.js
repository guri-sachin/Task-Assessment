import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

import { Table } from "react-bootstrap";

const Product = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3305/products").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  // ------delete -----

  async function DeleteProduct(id) {
    let result = await fetch(`http://localhost:3305/productdelete/${id}`, {
      method: "delete",
    });
    let data = await result.json();

    fetch("http://localhost:3305/products").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }


  

  return (
    <div>
        <div class="container">
    <nav>
      <ul>
        <li><a  href="#" style={{textDecoration:"none"}} class="logo">
          <img src="logo192.png"/>
          <span class="nav-item">Admin</span>
        </a></li>
       
        <li><a  href="#" style={{textDecoration:"none"}}>
          <i class="fas fa-comment"></i>
          <span class="nav-item">Message</span>
        </a></li>
        <li><a  href="#" style={{textDecoration:"none"}}>
          <i class="fas fa-database"></i>
          <span class="nav-item">Report</span>
        </a></li>
        <li><a  href="#" style={{textDecoration:"none"}}>
          <i class="fas fa-chart-bar"></i>
          <span class="nav-item">Attendance</span>
        </a></li>
        <li><a  href="#" style={{textDecoration:"none"}}>
          <i class="fas fa-cog"></i>
          <span class="nav-item">Setting</span>
        </a></li>
        <li><a  href="#" style={{textDecoration:"none"}} class="logout">
          <i class="fas fa-sign-out-alt"></i>
          <span class="nav-item">Log out</span>
        </a></li>
      </ul>
    </nav>
    <section class="main">
      
      <div class="users">
        <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYyokqg79NqUEO6g7f90dZqkR3nbdpS6dAUIrcDGdDk_9fN_DyH2gMCo58bljK3IAAds&usqp=CAU"/>
          <h6>shopping</h6>
          
        
          <button>view</button>
        </div>
        <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThChqsr8ZPuMZ0naAyv6ESv5-e5m6Lwc2sfJvBlL5B28MVYbkrjdt9jnhPcNYLeI_5QwU&usqp=CAU"/>
          <h6>shopping</h6>
          
        
          <button>view</button>
        </div>
        <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvd-_RWFVtDlbB0jHDpMMLX-DDiuwjtYmcg&usqp=CAU"/>
          <h6>shopping</h6>
          
        
          <button>view</button>
        </div>
        <div class="card">
          <img src="https://static.vecteezy.com/system/resources/previews/004/745/297/original/3d-isometric-paper-shopping-bag-in-circle-icon-shopping-bag-for-advertising-and-branding-collection-for-retail-design-for-web-page-ui-mobile-illustration-for-products-and-things-free-vector.jpg"/>
          <h6>shopping</h6>
          
        
          <button>view</button>
        </div>
      </div>
      <section class="attendance">
        <div class="attendance-list">
        <a href="/AddProduct">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{
                        background: "#DD3333;",
                        border: "solid 1px #DD3333",
                        marginLeft:"900px"
                      }}
                    >
                      ADD PRODUCT
                    </button>
                  </a>
          <h3>Product List</h3>
          <table class="table">
            <thead>
            <tr>
                      <th class="bl5"> #</th>
                      <th class="bl5">Product</th>
                      <th class="bl5"> Price</th>

                      <th class="bl5">Picture</th>
                      <th class="bl5">Action</th>
                    </tr>
            </thead>
            <tbody>
                    {data &&
                      data
                        // .filter((val) => {
                        //   if (search == "") {
                        //     return val;
                        //   } else if (
                        //     val.CateName.toLowerCase().includes(
                        //       search.toLowerCase()
                        //     )
                        //   ) {
                        //     return val;
                        //   }
                        // })
                        .map((item, index) => (
                          <tr key={item.id}>
                            <td data-label="User Id">{index + 1}</td>
                            <td data-label="firstName">{item.name}</td>
                            <td data-label="firstName">{item.price}</td>
                            <td>
                              <img
                                width="100"
                                height="80"
                                src={item.filename}
                              />
                          
                            </td>
                            <td data-label="Action">
                          
                              &nbsp;&nbsp;
                              <button
                                type="button"
                                class="btn btn-primary ab1"
                                onClick={() => DeleteProduct(item.id)}
                                style={{
                                  backgroundColor: "#DD3333",
                                  color: "white",
                                  border: "none",
                                }}
                              >
                                Delete
                              </button>
                             
                            </td>
                          </tr>
                        ))}
                  </tbody>
          </table>
        </div>
      </section>
    </section>
  </div>
    
    </div>
  );
};

export default Product;
