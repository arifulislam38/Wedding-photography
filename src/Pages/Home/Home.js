import React from 'react';
import HeroSection from '../../Items/HeroSection/HeroSection';
import Portfolio from '../../Items/portfolio/Portfolio';
import Services from '../../Items/Services/Services';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Services></Services>
            <Portfolio></Portfolio>
        </>
    );
};

export default Home;