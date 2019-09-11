import React from 'react';
// import AddBloodBank from '../AddBloodBank/AddBloodBank.react';
// import AddDonationCamp from '../AddDonationCamp/AddDonationCamp.react';
import './AdminProfile.css';
import {Link} from 'react-router-dom';

const AdminProfile = () => {

    return (
        <div className='adminprofile_wrapper'>
            <Link to="/addbloodbank">
                <button>Add Blood Bank</button></Link>
            <br></br>
            <br></br>
            <br></br>
                <Link to="/adddonation">
                <button>Add Donation Camp</button></Link>
            
        </div>
    );

}

export default AdminProfile;