import React from 'react'
import './card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="avloniy" />
            <div className="card-title">
                <h3>{props.name}</h3>
                <small>{props.year}</small>
                <div className="card-book">
                    <div className="card-logo">
                        <img src={props.imgB} alt="bluetooth" />
                        <span>{props.count1}</span>
                    </div>
                    <div className="card-logo">
                        <img src={props.imgA} alt="book" />
                        <span>{props.count2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;