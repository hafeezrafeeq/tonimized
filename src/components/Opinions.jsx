
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Opinions() {
  const imagePairs = [
    [
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/fans_vuecfm.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939814/Image1_1_ywp9q2.jpg",
    ],
    [
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/originalGirl_pv2n0h.png",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/artificialGirl_mkflpr.png",
    ],
    [
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600762629/Opinion_Image_2_qgjban.jpg",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600762586/Opinion_Image_pqsvzs.png",
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imagePairs.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === imagePairs.length - 1 ? 0 : prev + 1
    );
  };

  return (
  
      <div className="">
        {/* Card */}
        <div className= "rounded-2xl h-auto opinionsBox shadow-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side Images */}
          <div className="flex-col hidden relative lg:block items-center gap-6">
            <div className="opinionsCircles"></div>
            <img
              className="opinionShirt"
              src="https://toonimized.netlify.app/static/media/shirtDesign.ae2a0493.png"
              alt=""
            />
            <img
              className=" mobileCover"
              src="https://toonimized.netlify.app/static/media/mobileCover.9c27fff0.png"
              alt=""
            />
            <img
              className="bookCover"
              src="https://toonimized.netlify.app/static/media/bookCover.4576bcbd.png"
              alt=""
            />
          </div>

          {/* Right Side Text + Carousel */}
          <div className="flex-1 text-stone-50 font-bold text-center lg:text-right">
            <h1 className="text-6xl lg:text-8xl">Opinions?</h1>

            <div className="text-xl lg:text-2xl mt-6">
              <p>Ana & Jorge. 28 & 32 y.o, Married</p>
            </div>

            <div className="text-stone-400 text-base lg:text-lg mt-3">
              <p>Pittsburgh, United States</p>
            </div>

            <p className="text-base lg:text-xl mt-6 font-medium leading-relaxed">
              “My husband is a huge fan of the TV series and was extremely
              pleased with the picture. The most beautiful day of our life is now
              printed on a canvas hanging on our living room wall.”
            </p>

            {/* Carousel */}
            <div className="relative w-full max-w-3xl  mt-10">
              <div className="grid grid-cols-2 gap-4">
                {imagePairs[currentIndex].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`slide-${idx}`}
                    className="w-[100%] h-[80%] object-cover rounded-xl shadow-lg transition duration-500"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 text-stone-900 p-2 rounded-full hover:bg-white/70 transition"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 text-stone-900 p-2 rounded-full hover:bg-white/70 transition"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {imagePairs.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 w-3 rounded-full cursor-pointer transition ${
                      idx === currentIndex ? "bg-white" : "bg-stone-600"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quotes Image */}
        {/* <div className="flex justify-center mt-10">
          <img
            src="https://toonimized.netlify.app/static/media/quotes.a635bff8.png"
            alt=""
            className="w-16 lg:w-24"
          />
        </div> */}
      </div>
  
  );
}

export default Opinions;
