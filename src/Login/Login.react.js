import React from 'react';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Login.css';
import CheckAvailability from '../CheckAvailability/CheckAvailability.react';
// import DisplayCamp from '../DisplayCamp/DisplayCamp.react';
import AdminProfile from '../AdminProfile/AdminProfile.react';
import DonorHomePage from '../DonorHomePage/DonorHomePage/DonorHomePage.react'; 
import Axios from 'axios'




class Login extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            id: "",

            password: "",

            loaded:false

          };

    }

    validateForm() {

        return this.state.id.length > 0 && this.state.password.length > 0;

      }

    

      handleChange = event => {

        this.setState({

          [event.target.id]: event.target.value

        });

      }

    

      handleSubmit = event => {

        event.preventDefault();
        let url = "http://localhost:8080/authenticate";

          Axios.post(url,{
              username: this.state.username,
              password: this.state.password
          }).then(function(response) {
            console.log('Authenticated');
            console.log(response);
            localStorage.setItem("Token",response.data.token);
            console.log(localStorage.getItem("Token"));
            this.setState({loaded:true});
          }).catch(function(error) {
            console.log('Error on Authentication');
          });
// this.setState({loaded:true});
        

      }



    render() {
      if(!this.state.loaded)
      {

      

        return (

            <div className="Login">

                <header>

                    <h1>{this.props.name}</h1>

                </header>

        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="id">

            <FormLabel>Enter ID</FormLabel>

            <FormControl

              autoFocus

              type="id"

              value={this.state.id}

              onChange={this.handleChange}

            />

          </FormGroup>

          <FormGroup controlId="password" >

            <FormLabel>Password</FormLabel>
            <FormControl
          
               value={this.state.password}

              onChange={this.handleChange}

              type="password"

            />

          </FormGroup>

          <Button

            block

            bsSize="large"

            variant="dark"

            // disabled={!this.validateForm()}

            type="submit"

            >Sign in

          </Button>

        </form>

      </div>

        );
      }
      else{
              if(this.props.name==="Admin Login")   
              {
                return(
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1>Hello Admin</h1>
                <AdminProfile></AdminProfile>
              
                
                </div>);
              }
              else if(this.props.name==="Patient Login")
              {
                return(
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1>Hello Patient</h1>
                <CheckAvailability></CheckAvailability>
                </div>);
              }
              else{
                return(
                  <div>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1>Hello Donor</h1>
                <DonorHomePage donorID={this.state.id}></DonorHomePage>
                
                </div>);
              }
      }

    }

}



export default Login;