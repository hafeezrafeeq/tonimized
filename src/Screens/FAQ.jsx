
import Appbar from '../Gallery-Components/Appbar';
import Footer from '../components/Footer'
import Question from '../components/Question';


function Gallery() {



  return (
    < >
      <Appbar />

      <div>
        <div className='px-20 pt-20 text-center justify-center font-bold border-b-1 border-stone-100 gredient'>
          <h1 className='text-4xl text-center raleway '>Frequently Asked Questions</h1>
          <p className='text-2xl raleway my-4'>Always better to ask...</p>
          <p className='text-md raleway my-4 mb-20 '>Are there any questions popping up in your head regarding toonimized?
            Maybe they did pop in other’s mind too, so we made sure to cover some essential ones.</p>
        </div>

        <div className='pt-25 bg-white'></div>

        <Question
          Ques="1. How long will it take to get my order?"
          Ans="Your digital orders usually take between 5 to 8 days to deliver. Everything is hand drawn by our amazing artists"
        />


        <Question
          Ques="2. How do I receive my artwork"
          Ans="Your orders made from “Toonize” are digital drawings (high resolution PNG file), we will send you your personal peace of art via E-Mail."
        />


        <Question
          Ques="3. How can I print my artwork on something?"
          Ans="You can have your drawings printed by choosingone or more products out of our selection. Also, you can choose furtherPrint-on-Products of our partner network.Check out the following link -> (insert link here) Furthermore, printing them locally yourself is an alternative option.Digital art can be printed on posters and suitable products of any size without quality loss."
        />


        <Question
          Ques="4. Which payment methods do you accept?"
          Ans="We accept the following payment providers: Credit card payment, Paypal and bank transfer."
        />

        <Question
          Ques="What If I am not 100% satisfied with my order?"
          Ans="Happy customers are our motivation, meaning we work with the best artists to make your gift the “perfect” one. But if for some reason you are unsatisfied, you have the right to ask for revisions of your drawing until you are entirely happy with the result – unlimited revisions!"
        />

        <Question
          Ques="6. Can you draw an individual background?"
          Ans="Of course, we can simply draw a customized background of your choice. Extra fee of 20 USD applied."
        />


        <Question
          Ques="7. Do pets count as people?"
          Ans="Most other shops would say yes. We are different, we give you a great discount on drawing pets. So, feel free to include your loved ones. Peoples:15-20$ Pets: 12$"
        />


        <Question
          Ques="8. What Images should I upload?"
          Ans="We highly recommend uploading high-quality images where faces, colors, and textures are visible. This way we will be able to get everything right and there will be no need for revisions. Therefore, you can receive your order faster."
        />

        <Question
          Ques="9. We are a large group, can you turn us into cartoons as well?"
          Ans="Your digital orders usually take between 5 to 8 days to deliver. Everything is hand drawn by our amazing artists"
        />





        <div className="absolute top-40  "><img src="https://toonimized.netlify.app/static/media/leftCircle.b508aa3f.png" alt="img" width={170} /></div>

        <div className="relative bottom-260 z-[0] img-end  "><img src="https://toonimized.netlify.app/static/media/rightCircle.060a5813.png" alt="img" width={140} /></div>

      
        <div className=""><Footer /></div>

      </div>
    </>
  )
}
export default Gallery