
import ArtistCard from "../Articts/ArtictsCard";
import Appbar from "../Gallery-Components/Appbar";
import Footer from '../components/Footer'

function Artists({ name, age, favorite, image }) {
  return (
    < >
      <div className="gredient ">

        <Appbar />

        <div className="mx-20 pt-10 font-bold border-b-1 border-stone-400 text-end ">
          <h1 className='text-6xl raleway '>Artists</h1>
          <p className='text-2xl raleway my-4'>Where skills meet amusement!</p>

          <p className='text-sm raleway my-4'>We’ve gathered together a large amount of beautifully skilled artists,
            each with a unique style, yet each with a finesse talent of replying your favourite cartoons. What’s unique
            about them is that they’ve mastered the styles in such ways that it was about time to develop something new.
            And what’s better than doing it for the people!</p>
        </div >

        <div className="mt-20 flex  justify-center lg:gap-6 sm:gap-15 xl:mx-20 lg:mx-15 md:mx-10 md:gap-2 lg:flex md:flex-nowrap sm:flex-wrap flex-wrap gap-2  "  >
          <ArtistCard
            image="https://toonimized.netlify.app/static/media/1.863b167f.png"
            name="Megan"
            age="20"
            favorite="favorite"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/2.a2788a9b.png"
            name="Sarah"
            age="27"
            favorite="Simpsons"
            
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/3.1777e4ab.png"
            name="George"
            age="36"
            favorite="George Dragonball Z"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/4.804650e4.png"
            name="Samuel"
            age="35"
            favorite="South Park"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/5.70bb0587.png"
            name="Maria"
            age="22"
            favorite="South Park"
            className="lg:block md:hidden sm:hidden "
          />
        </div>

        <div className="flex  justify-center lg:gap-6 sm:gap-15 xl:mx-20 lg:mx-15 md:mx-10 md:gap-2 lg:flex md:flex-nowrap sm:flex-wrap flex-wrap gap-2 "  >
          <ArtistCard
            image="https://toonimized.netlify.app/static/media/6.8f85d08d.png"
            name="Sophia"
            age="23"
            favorite="Futurama"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/7.988dda9f.png"
            name="Carolyn"
            age="24"
            favorite="Family Guy"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/8.4c5b2d72.png"
            age="28"
            name="Zion"
            favorite="Simpsons"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/9.01013ddc.png"
            age="33"
            name="Hallie"
            favorite="Rick & Morty"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/10.d97b2fb4.png"
            name="Elijah"
            age="34"
            favorite="Futurama"
            className="lg:block md:hidden sm:hidden "
          />
        </div>

        <div className="pb-26 flex  justify-center lg:gap-6 sm:gap-15 xl:mx-20 lg:mx-15 md:mx-10 md:gap-2 lg:flex md:flex-nowrap sm:flex-wrap flex-wrap gap-2 "  >
          <ArtistCard
            image="https://toonimized.netlify.app/static/media/11.c357d086.png"
            name="Noah"
            age="20"
            favorite="South Park"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/12.84785b5c.png"
            name="Robert"
            age="29"
            favorite="Simpsons"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/13.a2819a3a.png"
            name="Jessie"
            age="30"
            favorite="Rick & Morty"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/14.1be2899a.png"
            name="Mason"
            age="20"
            favorite="Futurama"
          />

          <ArtistCard
            image="https://toonimized.netlify.app/static/media/15.0d98d8e8.png"
            name="Lucas"
            age="19"
            favorite=" Simpsons"
            className="lg:block md:hidden sm:hidden "
          />
        </div>

        <Footer/>

      </div>
    </>
  )
}
export default Artists;
