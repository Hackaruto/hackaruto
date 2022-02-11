import './Main.css'
import coding from '../../resources/5522876.jpg'
import fitbit from '../../resources/fitbit.svg'
import airbnb from '../../resources/airbnb.svg'
import google from '../../resources/google.svg'
import nasa from '../../resources/nasa.svg'
import homeimg from '../../resources/pair_programming.svg'

const Hero = () => {

    return (
        <div id="Home" className='hero flex flex-col items-center justify-center lg:justify-evenly mt-[8rem] lg:ml-[3rem] lg:flex-row z-3'>
           <div data-aos="fade-up" className="hero-left max-w-sm z-3" >
               <h1 className='text-4xl lg:text-5xl text-black font-bold '>
                   <span className='text-black flex'>
                      Welcome to 
                   </span>
                   <span className='text-orange-500 flex'>
                       Hackaruto
                   </span>
               </h1>
               <p className='text-md text-gray-500 my-4 max-w-xs md:max-w-lg lg:max-w-lg'>
                   Welcome to Hackaruto, the perfect place for all the coding enthusiasts out there, to learn the best solutions, to build some awesome projects and to share their cool ideas. 
               </p>
               <div className='flex flex-col lg:flex-row my-5'>
                   
                   <a href="https://linktr.ee/Hackaruto" target="_blank" rel="noopener noreferrer">
                       <button className='py-2 px-4 rounded-xl ml-0 mr-3 my-5 lg:my-0 text-orange-500 hover:bg-orange-500 hover:text-white border-2  border-orange-500 hover:border-white'>Join us</button>
                   </a>
               </div>
               
           </div>
           <div className="z-1" data-aos="fade-up">
               <img src={homeimg} alt="" className='h-[20rem] z-1 md:mt-[0rem] lg:ml-[5rem] lg:mt-[1rem]'/>
           </div>
        </div>
    )
}

export default Hero