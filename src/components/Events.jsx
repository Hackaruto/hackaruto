import './Main.css'
import project from './../../resources/about.jpg'
import { AiOutlineGithub } from 'react-icons/ai';
import {BiLink} from 'react-icons/bi';

const Events = () => {
    return (
        <div className='mt-10 flex flex-col'>
            <h3 className="text-center text-[#0094FF] pt-10">Events</h3>
        <h1 className="text-center text-[#000] font-extrabold text-4xl">
            Upcoming Events
        </h1>

        <div className='grid lg:grid-cols-1 m-[auto]'>
                <div className='max-w-xs m-12'>
                   <img src={project} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                      Deep dive into Web3 
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       Learn about the basics of Web3
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Zoom | 12.02.2022</p>
                       <div className='text-gray-500 flex'>
                        <BiLink className='text-3xl cursor-pointer' />
                    </div>
                    </div>
               </div>

        </div>
        </div>
    )
}

export default Events;
