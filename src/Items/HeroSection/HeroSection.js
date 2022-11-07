import React from 'react';
import image from '../../assets/hero-image.png';

const HeroSection = () => {
    return (
        <div className='w-full h-screen bg-[#021B29] relative top-0 mb-44'>
            <div className='w-[90%] mx-auto h-full relative'>
                <div className='flex h-[80%] w-[100%] absolute bottom-0'>
                <div className='w-1/2'>
                <h1 className='text-7xl font-sans text-white font-bold text-start mb-8'>
                        Hi! I'm Arif, <br />
                        Wild Life photograper
                </h1>
                <p className='text-3xl font-semibold text-slate-500 text-start'>Based in Amsterdam, I specialize in conceptual photography and love to take photos with creativity and passion.</p>
            </div>
            <div className='w-1/2 h-full'>
                <img className='h-full w-full' src={image} alt="" />
            </div>
            </div>

            </div>
        </div>
    );
};

export default HeroSection;