import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";


const AddProduct = () => {
  const history = useNavigate();

  // ---------------------------category Post------------------

  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState({ fileName: "", bytes: "" });
  const handlePicture = (event) => {
    const fileName = event.target.files[0].name;
    setPicture(event.target.files[0].name)
    // Update the custom file input label
    const inputLabel = document.querySelector(".custom-file-label");
    inputLabel.textContent = fileName;
  

  };
  

  async function handleSubmit() {
    try {
      var formData = new FormData();
formData.append("name", name);
formData.append("price", price);
formData.append("filename", picture);

      console.log(formData);
  
      const response = await axios.post("http://localhost:3305/api/Product", formData);
      if (response.success) {
              Swal.fire({
                icon: "success",
                title: "Product",
                text: " successfully uploaded",
              }).then(function () {
                history("/Product");
              });
            } else {
              Swal.fire({
                icon: "error",
                // title: 'Password Changed',
                text: response.err,
              });
            }
      console.log(response);
      
      // Additional logic if needed after the update
  
    
    } catch (error) {
      console.error("Error updating data:", error);
    }
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
      
 
      <section class="attendance">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Add Product</h1>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-2">Product </div>

                    <div class="col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Product Name"
                        style={{ marginBottom: "16px;", height: "100px;" }}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                        value={name}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-2">Price </div>

                    <div class="col-md-10">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Product Price"
                        style={{ marginBottom: "16px;", height: "100px;" }}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        value={price}
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-2">Upload Images </div>
                    <div class="col-md-10">
                      <div class="input-group mb-3">
                        <div class="custom-file">
                          <input
                            accept="image/*"
                            onChange={handlePicture}
                            type="file"
                            class="custom-file-input"
                            name="filename"
                            id="inputGroupFile01"
                            required
                          />
                          <label
                            class="custom-file-label"
                            for="inputGroupFile01"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-10">
                      <br />
                      <button
                        type="button"
                        class="btn btn-success ab1"
                        style={{
                          backgroundColor: "#DD3333",
                          border: "1px solid #DD3333",
                        }}
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
      </section>
    </section>
  </div>
    
    </div>
  );
};

export default AddProduct;