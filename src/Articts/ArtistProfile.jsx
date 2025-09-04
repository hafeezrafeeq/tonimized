import { useParams } from "react-router-dom";
import ArtistCard from "./ArtictsCard";
import Appbar from "../Gallery-Components/Appbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer'
import { Link } from "react-router-dom"

// Dummy artist data (should match the names used in your routing)
const artists = [
  {
    image: "https://toonimized.netlify.app/static/media/1.863b167f.png",
    name: "Megan",
    age: "20",
    favorite: "favorite",
    moto: "“Every artist was first an amateur”",
    number: "212+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/2.a2788a9b.png",
    name: "Sarah",
    age: "27",
    favorite: "Simpsons",
    moto: "“We don’t make mistakes, just happy little accidents”",
    number: "189+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/3.1777e4ab.png",
    name: "George",
    age: "36",
    favorite: "George Dragonball Z",
    moto: "“Art enables us to find ourselves and lose ourselves at the same time.”",
    number: "65+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/4.804650e4.png",
    name: "Samuel",
    age: "35",
    favorite: "South Park",
    moto: "“You don’t take a photograph, you make it”",
    number: "432+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/5.70bb0587.png",
    name: "Maria",
    age: "22",
    favorite: "South Park",
    moto: "“Creativity takes courage”",
    number: "252+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/6.8f85d08d.png",
    name: "Sophia",
    age: "23",
    favorite: "Futurama",
    moto: "“Every artist was first an amateur”",
    number: "212+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/7.988dda9f.png",
    name: "Carolyn",
    age: "24",
    favorite: "Family Guy",
    moto: "“Every artist was first an amateur”",
    number: "32+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/8.4c5b2d72.png",
    name: "Zion",
    age: "28",
    favorite: "Simpsons",
    moto: "“Every artist was first an amateur”",
    number: "212+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/9.01013ddc.png",
    name: "Hallie",
    age: "33",
    favorite: "Rick & Morty",
    moto: "“Every artist was first an amateur”",
    number: "265+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/10.d97b2fb4.png",
    name: "Elijah",
    age: "34",
    favorite: "Futurama",
    moto: "“Every artist was first an amateur”",
    number: "342+"
    
  },
  {
    image: "https://toonimized.netlify.app/static/media/11.c357d086.png",
    name: "Noah",
    age: "20",
    favorite: "South Park",
    moto: "“Every artist was first an amateur”",
    number: "212+"

  },
  {
    image: "https://toonimized.netlify.app/static/media/12.84785b5c.png",
    name: "Robert",
    age: "29",
    favorite: "Simpsons",
    moto: "“Every artist was first an amateur”",
    number: "212+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/13.a2819a3a.png",
    name: "Jessie",
    age: "30",
    favorite: "Rick & Morty",
    moto: "“The main thing is to be moved, to love, to hope, to tremble, to live.”",
    number: "382+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/14.1be2899a.png",
    name: "Mason",
    age: "20",
    favorite: "Futurama",
    moto: "“The principles of true art is not to portray, but to evoke”",
    number: "23+"
  },
  {
    image: "https://toonimized.netlify.app/static/media/15.0d98d8e8.png",
    name: "Lucas",
    age: "19",
    favorite: "Simpsons",
    moto: "“I want to make paintings that look as if they were made by a child.”",
    number: "212+"
  },
];

function ArtistProfile() {
  const { name } = useParams();

  // Find artist by name (case-insensitive)
  const artist = artists.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <>

      <div className=" gredient ">


        <div className="pb-20">
          <Appbar />
        </div>

        {artist ? (
          <p>
            <ArtistCard
              image={artist.image}
              name={artist.name}
              age={artist.age}
              favorite={artist.favorite}
              className="w-60  m-auto lg:rotate-340 md:rotate-30 sm:rotate-0 relative z-10 "
            />
          </p>
        ) : (
          <p className="text-red-500 text-xl">Artist "{name}" Not Found.</p>
        )}

        <div className=" m-auto raleway w-[60%] pb-30 ">
          <h1 className="text-4xl font-bold mt-12 ">{artist.name} </h1>
          <h1 className="lg:text-3xl md:text-2xl sm:text-md raleway font-bold  border-b py-4  border-stone-400 "> Moto : {artist.moto}</h1>



          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b py-6 border-stone-500">
            <p className="lg:text-lg md:text-md sm:text-sm font-bold raleway">
              Favorite TV Series: {artist.favorite}
            </p>
            <div className="flex gap-4 font-bold text-2xl text-amber-500 mt-2 sm:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div className="flex justify-between  border-b py-6 border-stone-500 ">
            <p className="text-1xl font-bold raleway">Number of Drawings </p>
            <p className="text-lg font-bold raleway text-amber-500">{artist.number}</p>
          </div>

          <div className="pt-6"> <Link className="text-lg font-bold raleway underline text-amber-500 hover:text-blue-600" to="/articts">Back to Artist list</Link></div>
        </div>

        <div className="absolute lg:top-40  w-[20%]"><img src="https://toonimized.netlify.app/static/media/left.efdc2d75.png" alt="" /></div>

        {/* <div className="absolute top-180 z-[0] left-[75%] m-auto  w-[25%]"><img src="https://toonimized.netlify.app/static/media/right.84328d3b.png" alt="" /></div>*/}
        <div className="relative z-10"><Footer /></div>

      </div>

    </>
  );
}

export default ArtistProfile;
