

import work from '../assets/work.png';
import demoVideo from '../assets/Video.mp4';

function works() {
    return (
        <>

            <div className="flex flex-col items-center justify-center pt-30   min-h-screen text-center bg-stone-50  ">
                <div className='z-20'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 raleway">How it works?</h1>
                    <p className="text-xs md:text-lg lg:text-md text-gray-900 text-center w-[60vw] ">TWorking with our team means 100% customer satisfaction. <br />
                        Our english speaking team pays attention to every tiny detail until the final drawing speaks for itself -</p>
                    <h2 className="text-sm md:text-lg lg:text-2xl font-bold mt-[4vw] raleway" >Unlimited Revision Rounds </h2>
                </div>
                <div className='relative mt-[-19vw] z-0'>
                    <img className=" w-1/2 m-auto" src={work} alt="Logo" />
                </div>
                    <div className="worksBigCircle z-10">
                        <img className='mt-[9vw] w-2/3 ' src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088828/Home/cat_eip0vj.png" alt="img" />
                    </div>

                <div className='flex flex-col items-center justify-center mt-[40vw]'>
                    <h1 className="text-4xl lg:text-6xl  font-bold raleway ">...And Behind the Scenes?</h1>
                    <p className="text-xl text-gray-900 font-bold text-center mt-4">All Hand Drawn ! No generic software! <br />
                        We use professional artists to hand-draw your portrait
                    </p>

                    <div className="flex justify-center items-center py-20 ">

                        <video
                            src={demoVideo}
                            controls
                            loop
                            className="w-[65%]  shadow-lg"
                        />
                    </div>
                </div>



                <div className="halfCircle"> </div>

                {/* <div><img className='rotate-180 z-0 w-240 h-200 absolute top-1155 left-80' src="https://toonimized.netlify.app/static/media/neclace.116d1ed1.png" alt="img" /></div> */}


            </div>




        </>
    );
}

export default works;
