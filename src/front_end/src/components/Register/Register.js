import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import http from "../AxiosSettings/http-common";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink,Link,useHistory,Redirect }  from "react-router-dom";

import {React, useState} from 'react';

function Register(props) {
  const [replies, setReplies] = useState([]);
  http.get(`/`)
  .then(res => {
    const persons = res.data;

    setReplies(persons.message);
  })
  http.post(`/asd/${props.score}`);


  const [Fullname, setFullname] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhonenumber] = useState("");
  const [result, setResult] = useState("");
  const [TwoFAEmail, setTwoFAEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, settconfirmPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return Fullname.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
  event.preventDefault();
    if (password !== confirmpassword) {
        alert("Passwords don't match");
    }else{
  const Fullnameclean =Fullname.replace(/[^\w\s]/gi, "");
  const Addressclean  =Address.replace(/[^\w\s]/gi, "");

  http.post('/register', {
        Fullname : Fullnameclean,
        Address  : Addressclean,
        Email    : Email,
        Phone    : PhoneNumber,
        Gender   : Gender,
        Username : Username,
        Password : password
                    })
        .then(function(response){
        console.log(response.data.message);
        setResult(response.data.message);

            if (response.data.message =="Success") {
            alert("Success");
            history.push({pathname:'/Login',state: response.data.User});
            }
            else {
            alert("Unsuccessful Login");
            }
                console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
        }


  // insert 2FA code will be here
  /*console.log("state button"+state.button);
  const Codeclean =Code.replace(/[^\w\s]/gi, "");
  console.log("Email 0 SMS 1:    "+value);
  console.log("Code:   "+Codeclean);
    if(state.button==1){
   http.post('/emailaut', {
        value: value,
        code: Codeclean,
        token: username
                    })
        .then(function(response){
        console.log(response.data.message);
        setResult(response.data.message);
            if (response.data.message =="Success") {
            alert("Success");
            setToken(response.data.User)
            history.push('/');
            window.location.reload();
            }
            else {
            alert("Unsuccessful Login");
            }
                console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
  }

  else if (state.button==2){
   http.post('/resend', {
        value: value,
        token: username
                    })
        .then(function(response){
        console.log(response.data.message);
        setResult(response.data.message);
            if (response.data.message =="Success") {
            alert("Code Sent");
            }
            else {
            alert("Error");
            }
                console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
  }*/
  }

                /*<!-- Geneterate 2fa code in register for Email.
         Genetrate 2fa code in regsier for phone. both will be Implemented at the end. -->*/


    const styles = {
        border: '1px solid black',
        padding:'80px',
   };



  return (
    <div className="Register">
    <div style={styles}>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="FullName">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

        </Form.Group>
         <Form.Group size="lg" controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={Address}
            placeholder =  "Yio Chu kang Ave 4 Blk 123 #123 123456"
            onChange={(e) => setAddress(e.target.value)}
          />

          </Form.Group>
          <Form.Group controlId = "Gender">
          <Form.Label>Gender</Form.Label>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Male"
        value = "Male"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        onChange={(e) => setGender(e.target.value)}
      />
      <Form.Check
        inline
        label="Female"
        value = "Female"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
          onChange={(e) => setGender(e.target.value)}
      />
    </div>
  ))}

          </Form.Group>
         <Form.Group size="lg" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={Email}
            placeholder = "name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>
         <Form.Group size="lg" controlId="2FAEmail">
          <Form.Label>Code</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={TwoFAEmail}
            onChange={(e) => setTwoFAEmail(e.target.value)}
            />
                    </Form.Group>
        <Form.Group size="lg" controlId="PhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
          type="number"
          min="0"
          step="1"
          className="w-100"
          value={PhoneNumber && Math.max(0, PhoneNumber)}
          onChange={e => setPhonenumber(e.target.value ? Number(e.target.value) : e.target.value)}

          />



    <br />
        </Form.Group>

          <Form.Group size="lg" controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
          type="text"
          value={Username}
          onChange={e => setUsername(e.target.value)}

          />
    <br />
        </Form.Group>
          <Form.Group size="lg" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}

          />
    <br />
        </Form.Group>
        <Form.Group size="lg" controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          type="password"
          value={confirmpassword}
          onChange={e => settconfirmPassword(e.target.value)}

          />
    <br />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
        </Form>

      <br />
            <NavLink
              className="navbar-item"
              to="/TwoFA">
              Forgot Username
            </NavLink>
            <br />
            <NavLink
              className="navbar-item"
              to="/dash">
              Forgot Password
            </NavLink>
        </div>
    </div>
  );
}

export default Register;
