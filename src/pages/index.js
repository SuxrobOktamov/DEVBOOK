import React, { useEffect, useState } from 'react';
import Header from '../component/Header/index';
import { Routes, Route } from 'react-router-dom';
import Account from '../component/Profile/account';
import Secruty from '../component/Profile/secruty';
import Author from '../author';
import Main from '../main';
import { data } from '../Data/Data';

const Home = () => {

    const [Id ,setId] = useState(0);
    const [Datas ,setDatas] = useState([]);

    useEffect(()=>{
        setDatas(data);
    }, [Datas])

    return(
        <>
             <Header />
             <Routes>
                <Route path='/profile' element={<Account/>} />
                <Route path='/profile/security' element={<Secruty />} />
                <Route path={`/book/${Id}`} element={ <Author Id={Id} Datas={Datas} /> } />
                <Route path='/' element={<Main setId={setId} Datas={Datas}/> } />
             </Routes>
        </>
       
    )
}

export default Home;