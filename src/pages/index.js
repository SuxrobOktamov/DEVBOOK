import React from 'react';
import Header from '../component/Header/index';
import { Routes, Route } from 'react-router-dom';
import Account from '../component/Profile/account';
import Secruty from '../component/Profile/secruty';
import Section1 from '../main/section1';
import Section2 from '../main/section2';
import Section3 from '../main/section3';
import Author from '../author';


const Home = () => {
    return(
        <>
             <Header />
             
             <Routes>
                <Route path='/profile' element={<Account/>} />
                <Route path='/profile/security' element={<Secruty />} />
                <Route path='/book/1' element={ <Author /> } />
             </Routes>
             <main>
                <Section1 />
                <Section2 />
                <Section3 />
             </main>
        </>
       
    )
}

export default Home;