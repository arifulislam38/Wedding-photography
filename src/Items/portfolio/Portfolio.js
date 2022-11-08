import React from 'react';
import image2 from '../../assets/wedding-2.jpg';
import image3 from '../../assets/wedding-3.jpg';
import image1 from '../../assets/wedding-1.jpg';

const Portfolio = () => {
    return (
        <div className='bg-[#021B29] w-full h-screen p-10 grid grid-cols-2 gap-8 items-center justify-center'>
            <div className='w-full h-full relative flex flex-col gap-4 items-center justify-center'>
               
                <div className='grid grid-cols-3 gap-4'>
                    <div></div>
                    <div><img className='rounded-lg' src={image1} alt="" /></div>
                    <div></div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div><img className='rounded-lg' src={image2} alt="" /></div>
                    <div><img className='rounded-lg' src={image3} alt="" /></div>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    <div></div>
                    <div><img className='rounded-lg' src={image3} alt="" /></div>
                    <div></div>
                </div>
            </div>


            <div>
                <h1 className='text-5xl font-serif font-semibold text-yellow-100 mb-6'>Why I fell in love with wedding photography</h1>
                <p className='text-xl font-serif font-semibold text-gray-400 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis voluptatem eveniet, nulla pariatur recusandae expedita, iste cupiditate dignissimos possimus iusto? Veniam, quaerat. Aperiam nemo, sint cumque corporis accusantium eum ducimus fugit id itaque repudiandae.</p>

                <p className='text-xl font-serif font-semibold text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis voluptatem eveniet, nulla pariatur recusandae expedita, iste cupiditate dignissimos possimus iusto? Veniam, quaerat. Aperiam nemo, sint cumque corporis accusantium eum ducimus fugit id itaque repudiandae.</p>
            </div>
        </div>
    );
};

export default Portfolio;