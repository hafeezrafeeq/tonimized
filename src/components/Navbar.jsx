import { Link } from "react-router-dom"
import Appbar from "../Gallery-Components/Appbar"


function Navbar() {
    return (
        <>
            <div className="sm:hidden block  w-full"><Appbar /></div>
            <div className="block justify-center flex sm:flex ">


                <div className="flex flex-col sm:block hidden gredient  w-3/4">
                    <div className="flex justify-between  gredient-nav p-8 items-center  ">

                        <div><img className="xl:w-58 lg:w-50 md:w-45 sm:w-30 animate-fade-in" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo_hafewu.png" alt="img" /></div>

                        <nav>
                            <ul className=" animate-fade-in flex gap-10 md:gap-5 lg:text-[20px] md:text-[16px] sm:gap-2 sm:text-[12px] raleway font-bold text-lg ">
                                <Link className="text- hover:text-amber-200" to="/">Home</Link>
                                <Link className="text- hover:text-amber-200" to="/gallery">Gallery</Link>
                                <Link className="text- hover:text-amber-200" to="/articts">Articts</Link>
                                <Link className="text- hover:text-amber-200" to="/faq">FAQ</Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="">
                        <div className="animate-fade-in xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl raleway text-stone-800 font-bold lg:mt-35  md:mt-20 sm:mt-20 md:p-10 sm:p-5  p-25" >
                            <h1>Cartoonize Yourself</h1>
                            <div className="bg-stone-800 w-40 rounded-lg h-2 sm:w-40 mt-6"></div>
                            <div className="text-stone-800 raleway text-2xl font-bold mt-6">
                                <p>No generated animations! <br />
                                    Enjoy an Artist’s personalized work of you!</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="animate-fade-in sm:hidden block raleway gredient pt-[6vw]">
                    <div className=" text-stone-800 font-bold ml-[4vw]" >
                        <h1 className="text-[5.5vw]"> Cartoonize Yourself</h1>
                        <div className="bg-stone-800 w-[18vw] rounded-lg h-1 mt-6"></div>
                        <div className="text-stone-800  text-[3.8vw] me-[2vw] font-bold mt-6">
                            <p>No generated Animations! <br />
                                Enjoy an Artist’s personalized work of you!</p>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col w-1/2 gradient  ">
                    <div className="sm:block hidden">
                        <div className="flex  justify-center gap-18  items-center bg-stone-900 p-7 ">
                            <div><i className="fa-solid fa-cart-shopping text-2xl text-stone-500"></i></div>
                            <button class="animate-fade-in btn-nav text-[11px] md:text-[1.5vw] lg:text-sm hover:bg-blue-600bg text-white font-semibold py-2 px-4 rounded-lg shadow">
                                GET STARTED
                            </button>
                        </div>
                    </div>

                    <div className="flex">

                        <div className="flex flex-col">
                            <img className="w-full " src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086924/Home/home_i1wlpb.png" alt="img" />
                            <img className="w-1/2 absolute mt-[9vw] right-1" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600085486/Home/GREENportalImp.new_1_3_3_jykcsl.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Navbar

