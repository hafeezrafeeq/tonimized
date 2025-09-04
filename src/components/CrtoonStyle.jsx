
import React, { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';



const CartoonStyle = () => {
    const itemImages = [
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087973/Home/turn-me-yellow_2x_uguj33.svg',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-family_xmefva.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-cartman_q7zql9.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-goku_f1pdnc.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-rick_nb6rpb.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600088040/Home/turn-me-future_uh7oxf.png',

    ];

    const mainSliderImages = [
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Dragonball1_jjwsxg.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087655/Home/Southpark1_u3mgqr.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087652/Home/Family_Guy1_uem0rp.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Futurama1_sppeoo.png',
        'https://res.cloudinary.com/dapozvnbr/image/upload/v1600087651/Home/Simpsons1_uxw7ji.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMainClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mainSliderImages.length);
    };

    return (

        <>
            <div className='gredient'>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 pt-20 mx-16  ">
                    {/* Text Section */}
                    <div className="max-w-2xl  text-center md:text-left">
                        <h1 className="raleway text-stone-800 font-bold text-4xl lg:text-6xl md:5xl sm:text-6xl l md:text-5xl">
                            Choose between POopular Cartoon styles
                        </h1>
                        <div className="bg-stone-800 w-40 h-2 rounded-lg mt-4 hidden sm:hidden md:block lg:block "></div>
                        <p className="text-stone-800 raleway text-2xl font-bold sm:text-2xl  mt-6">
                            Curious about how theCustomization is made?
                        </p>
                    </div>

                    {/* Circle Layout Section */}
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">


                        {/* Main Image */}
                        <div
                            className="rounded-full overflow-hidden shadow-lg cursor-pointer flex items-center justify-center w-[35vw] h-[35vw] custpmizeCircle"
                            onClick={handleMainClick}
                        >
                            <img
                                src={mainSliderImages[currentIndex]}
                                alt={`Main ${currentIndex}`}
                                className="w-2/3 h-2/3 object-contain"
                            />
                        </div>

                        <button
                            onClick={() =>
                                setCurrentIndex((prevIndex) =>
                                    prevIndex === 0 ? mainSliderImages.length - 1 : prevIndex - 1
                                )
                            }
                            className="absolute left-[-20px] sm:left-[-20px] w-12 h-12 flex items-center justify-center    hover:text-amber-400 text-white-500 hover:animate-bounce transition duration-100 z-20"
                        >
                            <ChevronLeft className="w-14 h-14" />
                        </button>

                        {/* Right Arrow with Icon */}
                        <button
                            onClick={() =>
                                setCurrentIndex((prevIndex) => (prevIndex + 1) % mainSliderImages.length)
                            }
                            className="absolute right-[-20px] sm:right-[-20px] w-12 h-12 flex items-center justify-center  hover:text-amber-400  text-white-800 hover:animate-bounce transition duration-300 z-20"
                        >
                            <ChevronRight className="w-14 h-14" />
                        </button>
                    </div>

                </div>

                <div className=" flex flex-wrap justify-center gap-4 px-20 py-20">
                    {itemImages.map((imgSrc, i) => (
                        <div key={i} className="w-40">
                            <img
                                src={imgSrc}
                                alt={`item-${i}`}
                                className=" object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>

        </>

    );
};

export default CartoonStyle;

