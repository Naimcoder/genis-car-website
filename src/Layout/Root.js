import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shares/Footer/Footer';
import Header from '../Components/Shares/Header/Header';

const Root = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;