import React from 'react';
// import axios  from 'axios';

// import './AddBloodBank.css';
// const proxyurl = "https://cors-anywhere.herokuapp.com/"
let url1="http://localhost:8080/addDonationCamp";
// let url = proxyurl + url1;
class AddBloodBank extends React.Component {
    constructor(props) {
        super(props);
        this.state={
       newdonorList:{
         "city": "",
         // "donorList": [],
         "fromDate": "",
         "fromTime": "",
         // "id": 0,
         "name": "",
         "toDate": "",
         "toTime":"" ,
         "venue": ""
         }
        }
    }


    handleChange =(event) =>{
       
        let name = event.target.name;
        let value =event.target.value;
         // console.log(value)
          this.setState(prevState =>( {newdonorList:{...prevState.newdonorList,[name]:value}}));
          //console.log("This is : " + JSON.stringify(this.state.newdonorList))
      }

      handleSubmit =(event) =>
      {
 
          event.preventDefault();
          console.log(this.state.newdonorList);
        //   axios.post(url1,this.state.newdonorList,headers)
         fetch(url1,{
            "method":"POST",
            "body":JSON.stringify(this.state.newdonorList),
            headers:{'Content-Type': 'application/json', 
            'Authorization': 'Bearer '+localStorage.getItem("Token")},
        })
        .then(resp=>{ console.log(resp);console.log(resp.status)});
      }
    render() {
        return (
            <div className='addbloodbank_wrapper'>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
            <h1>Donation Camp Registeration</h1>
         <form className="form1" onSubmit={this.handleSubmit}>
         <label>
            Name:
         <input type="text" name="name" onChange={this.handleChange}/>
         </label><br></br>
         
         <label>
            From Date:
         <input type="date" name="fromDate" onChange={this.handleChange} />
         </label><br></br>

         <label>
            To Date:
         <input type="date" name="toDate" onChange={this.handleChange} />
         </label><br></br>

         <label>
            From Time:
         <input type="number" name="fromTime" onChange={this.handleChange}/>
         </label><br></br>
         <label>
            To Time:
         <input type="number" name="toTime" onChange={this.handleChange}/>
         </label><br></br>

         <label>
            Venue:
         <input type="text" name="venue" onChange={this.handleChange}/>
         </label><br></br>
        
         <input type="submit" value="submit" value="POST"/>
        </form>  
        </div>
          
        );
    }
}

export default AddBloodBank;


