import React from 'react'
import './secruty.css';
import {Link} from 'react-router-dom';
import Header from '../Head';

function Secruty() {
  return (
    <>  
        <Header />
        <div className="content">
            <form className="content-form1">
                <h3>Change Or Recover Your Password:</h3>
                <div className="form-control">
                    <label htmlFor="name">Email</label>
                    <input type="email" placeholder="admin@mail.ru" id="name" />
                    <small>Please enter your first name.</small>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Current password</label>
                    <input type="password" placeholder="*********" id="name" />
                    <small>Please enter your password.</small>
                </div>
                <div className="form">
                    <div className="form-control">
                        <label htmlFor="name">New Password</label>
                        <input type="password" placeholder="*********" id="name" />
                        <small>Please enter your  phone number.</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="name">Confirm Password</label>
                        <input type="password" placeholder="*********" id="name" />
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

export default Secruty;