import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './DonorHomePage.css';
import DonorProfile from '../DonorProfile/DonorProfile.react';
import EditProfile from '../EditProfile/EditProfile.react';
// import FetchDonationCamps from '../../FetchDonationCamps/FetchDonationCamps.react';
import DisplayCamp from '../../DisplayCamp/DisplayCamp.react';

class DonorHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            redirect:false,
            
        }
    }
    componentDidMount(){
        
    }
    handleClick=()=>{
        this.setState({redirect:true})
    }

    render() {
        if(this.state.redirect){
            return(
                <Router>
                <Redirect to='/editProfile/' />
                    <Route path='/editProfile/' component={EditProfile}></Route>
                </Router>
            )
        }
        else{return (
            <div className='donorhomepage_wrapper'>
                <br>
                </br>
                <br/>
                <br></br>
                <p> Donor Home Page</p>
                
                
                <button onClick={this.handleClick}>Edit Profile</button>
                <DonorProfile id={this.props.donorID}></DonorProfile>
                <div className="card ">
                <div className="card-header bg-secondary"><h4>Blood Donation Camps</h4> </div>
                <div className="card-body">
                <DisplayCamp donorID={this.props.donorID}></DisplayCamp>
                </div>
                </div>
                {/* <FetchDonationCamps></FetchDonationCamps> */}
            </div>
        );}
    }
}

export default DonorHomePage;