import React from 'react'
import './section.css';
import { Link } from 'react-router-dom';
import { data } from '../../Data/Data';

import Card from './card';


function Section3() {
  return (
    <section>
        <div className="cards">
           {data.map((item)=>(
                <Link to={`/book/${item.id}`} key={item.id}>
                    <Card 
                        img={item.img} 
                        name={item.name} 
                        year={item.year}
                        imgB={item.imgB}
                        imgA={item.imgA}
                        count1={item.count1}
                        count2={item.count2}
                    />
                </Link>
           ))}
        </div>
    </section>
  )
}

export default Section3;