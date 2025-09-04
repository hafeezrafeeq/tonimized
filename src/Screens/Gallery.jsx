import Card from '../Gallery-Components/Card';
import Appbar from '../Gallery-Components/Appbar';
import Footer from '../components/Footer'

function Gallery() {
  return (
    < >

      <Appbar />
      

      <div className='gredient raleway '>
        <div className='px-8 sm:px12 md:px-15 lg:px-20 pt-10 font-bold border-b-1 border-stone-400'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl   '>Gallery</h1>
          <p className='text-sm md:text-md lg:text-lg my-4'>Watch some previous work of our great artists!</p>
        </div>



        <Card />
        <Footer/>


      </div>
    </>
  )
}

export default Gallery  

