import React from 'react';
import image2 from '../../assets/wedding-2.jpg';
import image3 from '../../assets/wedding-3.jpg';
import image1 from '../../assets/wedding-1.jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ImEnlarge2 } from 'react-icons/im';

const Portfolio = () => {
    return (
        <div className='bg-[#021B29] w-full lg:h-screen p-10 grid lg:grid-cols-2 gap-8 items-center justify-center'>
            <div className='w-full h-full relative flex flex-col gap-4 items-center justify-center'>
               
                <div className='grid grid-cols-3 gap-4'>
                    <div></div>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={image1}>
                                <img className='rounded-lg' src={image1} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div></div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div><PhotoProvider>
                            <PhotoView src={image2}>
                                <img className='rounded-lg' src={image2} alt="" />
                            </PhotoView>
                        </PhotoProvider></div>
                    <div><PhotoProvider>
                            <PhotoView src={image3}>
                                <img className='rounded-lg' src={image3} alt="" />
                            </PhotoView>
                        </PhotoProvider></div>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                    <div></div>
                    <div><PhotoProvider>
                            <PhotoView src={image2}>
                                <img className='rounded-lg' src={image2} alt="" />
                            </PhotoView>
                        </PhotoProvider></div>
                    <div></div>
                </div>
            </div>


            <div>
                <h1 className='text-5xl font-serif font-semibold text-yellow-100 mb-6'>Why I fell in love with wedding photography</h1>
                <p className='text-xl font-serif font-semibold text-gray-400 mb-6'> photography is written for beginners, with several tips and suggestions to take your skills as far as possible. However, writing an introduction to photography is like writing an introduction to words; as amazing and important as it is, photography can be almost limitlessly complex.</p>

                <p className='text-xl font-serif font-semibold text-gray-400'> photography is written for beginners, with several tips and suggestions to take your skills as far as possible. However, writing an introduction to photography is like writing an introduction to words; as amazing and important as it is, photography can be almost limitlessly complex.</p>
            </div>
        </div>
    );
};

export default Portfolio;