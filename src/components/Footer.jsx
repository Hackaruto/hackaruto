import './Main.css'
import logo from '../../resources/hackaruto-logo.png'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-[8rem]'>
                
            <div className="footer-up flex flex-col justify-between md:flex-row">
              <div className='max-w-lg p-8 md:ml-[2rem]'>
                <div>
                     <img src={logo} alt="" className='h-11' />
                </div>
                <h3>
                    
                </h3>
                  <div className='flex'>
                <a href="https://github.com/Hackaruto"><AiOutlineGithub className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/></a>
                <AiOutlineInstagram className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/>
                <TiSocialTwitter className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/>
                <TiSocialLinkedin className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/>
                  </div>
               </div>

               <div className='p-8 pt-0 md:pt-8 mr-[5rem]'>
                   <h2 className='text-xl font-bold text-gray-600'>Important Links</h2>
                   <hr/>
                   <ul>
                       <li>
                           <a href="#" className='text-orange-500 m-1 text-lg'>Home</a>
                       </li>
                       <li>
                           <a href="#" className='text-orange-500 m-1 text-lg'>About</a>
                       </li>
                       <li>
                           <a href="#" className='text-orange-500 m-1 text-lg'>Projects</a>
                       </li>
                       <li>
                           <a href="#" className='text-orange-500 m-1 text-lg'>Events</a>
                       </li>
                       <li>
                           <a href="#" className='text-orange-500 m-1 text-lg'>Team</a>
                       </li>
                   </ul>
               </div>
            </div>
            <hr />
            <div className='flex flex-col  items-center justify-between md:flex-row'>
                
                <h1 className=' p-3 font-bold pt-0 md:mr-12'>
                    Designed and Developed by <a href="" className='text-blue-600'>Hackaruto team</a>
                </h1>
            </div>
        </div>
    )
}

export default Footer;
