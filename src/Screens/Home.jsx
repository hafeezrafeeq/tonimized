
import Navbar from '../components/Navbar';
import Transfrom from '../components/Transfrom';
import CartoonStyle from '../components/CrtoonStyle';
import Works from '../components/Works';
import Opinions from '../components/Opinions';
import MeetArtists from '../components/MeetArtists'
import Discounts from '../components/Discounts'
import Footer from '../components/Footer'
import { useEffect } from 'react';




function Home() {


  return (
    <>
      <Navbar />
      <Transfrom />
      <CartoonStyle />
      <Works />
      <Opinions />
      <MeetArtists />
      <Discounts />
      <Footer />
    </>
  )

}
export default Home