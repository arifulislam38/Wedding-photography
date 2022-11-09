import React from 'react';
import HeroSection from '../../Items/HeroSection/HeroSection';
import Portfolio from '../../Items/portfolio/Portfolio';
import Services from '../../Items/Services/Services';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Services></Services>
            <Portfolio></Portfolio>
        </>
    );
};

export default Home;