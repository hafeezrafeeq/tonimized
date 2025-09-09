function MeetArtists() {
    return (
        <>

            <div className="flex justify-between  gredient shadow-lg ">
                <div className="raleway text-stone-800  font-bold text-7xl  w-full h-full mt-[6vw] mx-[4vw]  md:mx-[4vw] lg:mx-[8vw]" >
                    <h1 className="text-xl sm:text-3xl md:text lg-text-8xl xl:text-6xl">Meet The Amazing Artists</h1>
                    <div className=" w-40 rounded-lg h-2 "></div>
                    <div className=" raleway font-bold mt-6">
                        <p className="text-xl md:text lg-text-6xl xl:text-4xl ">Meet the team With the skillest hands and most vivid vision.!</p>
                        <p className="text-sm mt-6">If you Are curious and wish to know more about us, we are one call away!
                            Also for any questions about the artists, check FAQ or contact us.</p>
                    </div>
                    <div className=" ">
                        <button className="btn-color pb-6 w-60 border-4 text-sm rounded-md ">SEE THE ARTISTS</button>

                    </div>


                </div>

                <img className="w-[50%] hidden sm:block" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600029842/Home/Done_Transparent_1_1_xkc2dg.png" alt="" />

            </div>

        </>
    )
}

export default MeetArtists;