
import { Outlet, Route, Routes } from 'react-router-dom';

import Hero from './Hero';
import Price from './Price';
import Guide from './Guide';
import Questions from './Questions';
import Footer from './Footer';
import React from 'react';
import Header from './Header';


const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Hero />
            <Guide />
            <Price />
            <Questions />
            <Footer />
        </div>
    )
}

export default Home