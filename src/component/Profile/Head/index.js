import React from 'react'
import { Link } from 'react-router-dom'
import './Head.css';

function Header() {
  return (
    <>
        <div className='header'>
            <div className="profile">
                <Link to={'/profile'}>
                    <div className="account">
                        <span>1</span>
                        <p>My account</p>
                    </div>
                </Link>
                <Link to={'/profile/security'}>
                    <div className="security">
                        <span>2</span>
                        <p>Security</p>
                    </div>
                </Link>
                <div className="paymet" disabled>
                    <span>3</span>
                    <p>Make Payment</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;