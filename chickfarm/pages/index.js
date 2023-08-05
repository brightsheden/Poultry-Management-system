//import hen from '../public/images/4hen.jpg'
import chick from '../public/images/chicken-3607863_1920.jpg'
import chick_t from '../public/images/hen-5642953_1920.jpg'
import jugs from '../public/images/jugs.jpg'
import Image from 'next/image'
import {FaArrowRight, FaFlagCheckered} from 'react-icons/fa'
export default function Home() {
  return (
   <>
   {/* jumbotron*/}
   <section className="bg-center bg-no-repeat bg-[url('../public/images/hen.jpg')] bg-gray-700 bg-blend-multiply">
  <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <h1 className="mb-4 text-4xl  font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ChickFarm Poultry</h1>
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">All of our chickens are grown by the Soanes family and their farming neighbours on farms in and around the Yorkshire Wolds.</p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{backgroundColor:"rgb(224,177,11)"}}>
       Discover More
        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </a>
       
    </div>
  </div>
</section>

<section className="container mx-auto flex flex-col space-y-8 md:flex-row justify-between md:space-x-5 mt-5">
  <div>
    <p className="text-5xl md:text-7xl font-bold">Quality, innovation and food safety.</p>
  </div>
  <div className="space-y-5">
    <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    <button type="button" className="inline-flex justify-center items-center text-center space-x-3 text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-700 font-medium  text-xl p-3 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>Yellow</button>
  </div>
</section>

{/*cards*/}
<section className="container mx-auto grid grid-cols-1 gap-y-3 md:grid md:grid-cols-3 gap-4 mt-10 my-20">
  <div className='flex space-x-3 md:justify-between '>
    <span className='bg-green-500   p-2 text-8xl rounded-full items-center justify-center '>
    <FaFlagCheckered className='text-white '/>
    </span>
   
    <div className='space-y-4'>
      <h3 className='text-3xl font-bold'>Broilers</h3>
      <p className='text-lg md:text-base w-100 md:w-80'>We offer a full range of products to support healthy broiler performance.</p>
    </div>
  </div>

  <div className='flex space-x-3 md:justify-between '>
    <span className='bg-green-500 p-2 text-8xl rounded-full items-center justify-center '>
    <FaFlagCheckered className='text-white '/>
    </span>
   
    <div className='space-y-4'>
      <h3 className='text-3xl font-bold'>Breeders</h3>
      <p className='text-lg md:text-base w-100 md:w-80'>We offer a full range of products to support healthy broiler performance.</p>
    </div>
  </div>

  <div className='flex space-x-3 md:justify-between '>
    <span className='bg-green-500 p-2 text-8xl rounded-full items-center justify-center '>
    <FaFlagCheckered className='text-white '/>
    </span>
   
    <div className='space-y-4'>
      <h3 className='text-3xl font-bold'>Layers</h3>
      <p className='text-lg md:text-base w-100 md:w-80'>We offer a full range of products to support healthy broiler performance.</p>
    </div>
  </div>


  
</section>


<section className="bg-center bg-no-repeat bg-[url('../public/images/jugs.jpg')] bg-gray-700 bg-blend-multiply my-8">
  <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 text-white'>
  <h2 className='text-7xl font-medium my-5'>
  You’ve got questions now.
  </h2>

  <p className='text-3xl my-5'>
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non
  </p>

<div className='flex justify-center'>
<a className='flex w-80 items-center justify-center bg-green-500 text-white p-2 rounded-md text-2xl items-center '>Contacts Us <FaArrowRight/> </a>


</div>
  


  </div>
 
</section>

<section className='my-10 container mx-auto'>
  <div className='text-center my-5'>
  <h2 className='text-5xl font-medium'> About us</h2>
  <p className='text-4xl'> We are always here for you for your satisfaction</p>
  </div>

  

  <div className='flex flex-col md:flex-row space-y-5 '>
      <div className='flex flex-col md:flex-row'>
        <div className='mr-8 border border-black mb-5'>
          <Image src={chick}  className='w-fit   ' />

        </div>
        <div className='w-100 space-y-5'>
        <Image src={chick_t} className='w-fit h-auto' />
        <Image src={jugs} className='w-fit h-auto' />

        </div>
          



      </div>
      <div className='text-xl  ml-5 space-y-5'>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra,
Elit odio tincidunt mi, non Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
 cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non Vestibulum ante</p>
 <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra,
Elit odio tincidunt mi, non Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
 cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio tincidunt mi, non Vestibulum ante</p>


      </div>
  </div>
</section>



   </>
  )
}
