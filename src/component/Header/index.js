import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';
import './Header.css';
import Img from '../../images/img-1.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="Rectangle">
                        <h2>BADIIYAT</h2>
                        <ul className="list-group">
                            <Link to={'/'}>
                                <li className="list-item active">Bosh sahifa</li>
                            </Link>
                            <li className="list-item">Nasr</li>
                            <li className="list-item">Nazm</li>
                            <li className="list-item">Maqolalar</li>
                            <li className="list-item">Forum</li>
                        </ul>
                        <Link to={'/profile'}>
                            <div className="maskGroup">
                                <img src={Img} alt="img" />
                                <ArrowDropDownIcon style={{color: '#fff'}} />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header