import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../Profile/a.jpg";
import Image1 from "../Profile/Capture.PNG";
import {Button, CardGroup, Row, Col,style,hr} from "react-bootstrap";
import {React, useState} from 'react';

function Profile(props) {
  return (
    <div className="Profile">
      
      
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container bootstrap snippets bootdey"/>
<div class="row">

    <div class="col-md-12">
      <div class="grid profile">
        <div class="grid-header">
        
          <div class="col-xs-7">
            <h3>John Doe</h3>
            
            <img src={Image} class="ipro" alt="" />
    
          
          </div>
        
        </div>
        <div class="grid-body">
          
 
        
              <h1>My Profile</h1>
              <br></br>
              <div class="row">
                <div class="col-md-6">

                  <p><strong>Account Number</strong> 123-5974-8952-2</p>
                  <p><strong>Account Type</strong> Platinum</p>
                  <p><strong>Joined on:</strong> July 24<sup>th</sup>, 2010</p>
                  

                </div>
                <div class="col-md-6">
                  <p><strong>Address:</strong> 101 Ponggol Seventeenth Ave, Singapore 828861 </p>
                  <p><strong>Phone:</strong> 65991523</p>
                  <p><strong>Mobile:</strong> 95113597</p>
                  <p><strong>Email:</strong> Johndoe@jd.com</p>
                  
                  
                </div>
                <hr class="rounded"></hr>
                <h1>Security</h1>
                <p><strong>Username:</strong> ******</p>
                <p><strong>Password:</strong> ****** </p>
                <p><strong>Access PIN:</strong> ******</p>
      




                <hr class="rounded"></hr>

                <h1>Cards</h1>
                

             
               
                <div class="card">
                <img src={Image1} class="card" alt="" />
                </div>
                
               




            


              </div>
              <div class="row">
                <div class="col-sm-4 stats">
                  <h1>46,200.00 SGD</h1>
                  <span>Total Balancec</span>
                
                </div>
                <div class="col-sm-4 stats">
                  <h1>46,155.00 SGD</h1>
                  <span>Available Balance</span>
                
                </div>
                <div class="col-sm-4 stats">
                  <h1>0.00 SGD</h1>
                  <span>What you owe</span>
                  
                </div>
              </div>
            </div>
           
          

            
        </div>
      </div>
    </div>
  </div>

   
  
  );
}
export default Profile;
