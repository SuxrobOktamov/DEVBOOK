import React from 'react'
import './content.css';
import {Link} from 'react-router-dom';
import Img1 from '../../../images/card-logo.png';
import Img2 from '../../../images/Camera.png';
import Header from '../Head/index';

function Account() {
  return (
    <>
        <Header />
        <div className="content">
            <div className="content-logo">
                <img src={Img1} alt="logo" />
                <img id="camera" src={Img2} alt="logo" />
            </div>
            <form className="content-form">
                <h3>My profile</h3>
                <div className="form-control">
                    <label htmlFor="name">Frist name</label>
                    <input type="text" placeholder="John" id="name" />
                    <small>Please enter your frist name.</small>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Last name</label>
                    <input type="text" placeholder="Wick" id="name" />
                    <small>Please enter your last name.</small>
                </div>
                <div className="form">
                    <div className="form-control">
                        <label htmlFor="name">Phone</label>
                        <input type="text" placeholder="+61412345678" id="name" />
                        <small>Please enter your  phone number.</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="name">Email</label>
                        <input type="email" placeholder="john.wick@reeves.com" id="name" />
                        <small>Please enter your email address.</small>
                    </div>
                </div>
                <Link to={'/'}>
                    <button type="submit">Save Changes</button>
                </Link>
            </form>
       </div>
    </>
  )
}

export default Account;