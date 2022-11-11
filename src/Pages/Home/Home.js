import React from 'react';
import HeroSection from '../../Items/HeroSection/HeroSection';
import Inspired from '../../Items/inspired/Inspired';
import Portfolio from '../../Items/portfolio/Portfolio';
import Services from '../../Items/Services/Services';
import UseTitle from '../../Items/Title/Title';

const Home = () => {
    UseTitle('Home')
    return (
        <>
            <HeroSection></HeroSection>
            <Services></Services>
            <Portfolio></Portfolio>
            <Inspired></Inspired>
        </>
    );
};

export default Home;