

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './CheckAvailability.css';
import ShowDonor from '../ShowDonor/ShowDonor.react';
let bloodId,location;
class CheckAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            donorList:[]
        }
    }
    handleClick=(event)=>{
        event.preventDefault();
        console.log(bloodId);
        console.log(location);
        
        let url="http://localhost:8080/search/" + bloodId+"/"+location;
        fetch(url,{
            headers: {'Content-Type': 'application/json', 
            'Authorization': 'Bearer '+localStorage.getItem("Token")}
                }).
            then(resp=>resp.json()).then(donorList=>{this.setState({donorList:donorList,loaded:true})});
      
        
    }
    handleChange1 = event => {
       
        bloodId=event.target.value;
    }

    handleChange = event => {
       
        location=event.target.value;
    }
    render()
    
     {
        console.log(this.state.loaded+"Hi");
        if(!this.state.loaded)
    {
        return (
            <form onSubmit={this.handleClick}>
    <div class="abc container text-center" >        
            <div class="form-group" align="center">
            <label for="Blood Group">Select Blood Group</label>
            
            <select class="form-control" id="idblood"  onChange={this.handleChange1}>
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
            </select>
            </div>
            
              <div class="form-group" align="center">
    <label for="Location" >Location</label>
    <select class="form-control" id="location" onChange={this.handleChange}  >
      <option>Chennai</option>
      <option>Mumbai</option>
      <option>Bangalore</option>
      <option>Kolkata</option>
      <option>Delhi</option>
      <option>Pune</option>
      <option>Chandigarh</option>
      <option>Lucknow</option>
      <option>Jaipur</option>
      <option>Hyderabad</option>
      <option>CH</option>
    </select>
     </div>  
            <div class="form-group">
            <label for="Blood Group"></label>
            <div></div>
            <button type="submit" value="POST" class="btn btn-secondary btn-dark">Submit</button>
            </div>
            </div>

            </form>
         
        );
    }
    else{
        return(

            <div>
                
        <ShowDonor donorList = {this.state.donorList}></ShowDonor>
        </div>
        );

    }
    }
}

export default CheckAvailability;