import React from 'react';
import './section.css';
import Img1 from '../../images/img-2.png';
import { Search } from '@mui/icons-material';
// import { internal_processStyles } from '@mui/styled-engine';


function Section1() {

   const Change =(e) =>  {
        const type = e.target.value.toLowerCase();
        let card = document.querySelectorAll('.card');

        card.forEach((item)=> {
           const index = item.childNodes[1].childNodes[0].textContent.toLowerCase();

            if(index.indexOf(type) === 0){
                item.style.display = 'block'
            }else{
                item.style.display = 'none'
            }
        })
        
   }
    
  return (
        <section>
            <aside className="logo">
                <img src={Img1} alt="logo" /> 
            </aside>
            <div className="search">
                <h2>QIDIRISH</h2>
                <div className="search-information">
                    <div className="search-input">
                        <input onChange={(e)=>{Change(e)}} type="search" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
                    </div>
                    <div className="search-button">
                        <button>
                            <Search style={{color:'#3C2710'}}/>
                            <p>Izlash</p>
                        </button>
                    </div>
                </div>
            </div>
       </section>
  )
}

export default Section1;