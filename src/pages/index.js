import React, { useState } from 'react';
import Header from '../component/Header/index';
import { Routes, Route } from 'react-router-dom';
import Account from '../component/Profile/account';
import Secruty from '../component/Profile/secruty';
import Author from '../author';
import Main from '../main';

const Home = () => {

    const [Id ,setId] = useState(0);

    return(
        <>
             <Header />
             <Routes>
                <Route path='/profile' element={<Account/>} />
                <Route path='/profile/security' element={<Secruty />} />
                <Route path={`/book/${Id}`} element={ <Author /> } />
                <Route path='/' element={<Main setId={setId}/> } />
             </Routes>
        </>
       
    )
}

export default Home;