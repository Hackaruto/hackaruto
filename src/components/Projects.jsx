import './Main.css'
import project from './../../resources/project1.png'
import project2 from './../../resources/helping-hands.png'
import project3 from './../../resources/linkfree.png'
import { AiOutlineGithub } from 'react-icons/ai';
import {BiLink} from 'react-icons/bi';

const Projects = () => {
    return (
        <div className='mt-10 flex flex-col'>
            <h3 className="text-center text-[#0094FF] pt-10">Projects</h3>
        <h1 className="text-center text-[#000] font-extrabold text-4xl">
            Our Projects
        </h1>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 m-[auto]'>
               <div className='max-w-xs m-12'>
                   <img src={project} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                       Hackaruto Website
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       Official website of Hackaruto Club created by our dedicated and hardworking team members.
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Hackaruto | 04 Feb 2022</p>
                       <div className='text-gray-500 flex'>
                        <a href="https://github.com/Hackaruto/hackaruto"><AiOutlineGithub className='text-3xl mr-3 cursor-pointer'/></a>
                       <a href="https://hackaruto.netlify.app/"><BiLink className='text-3xl cursor-pointer' /></a> 
                    </div>
                    </div>
               </div>
               <div className='max-w-xs m-12'>
                   <img src={project2} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                       Helping Hands
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       A Website that contains the study materials and resources for the freshers' at NIT, Patna.
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Hackaruto | 10 Jan 2022</p>
                       <div className='text-gray-500 flex'>
                        <a href="https://github.com/W-O-F/helping-hands"><AiOutlineGithub className='text-3xl mr-3 cursor-pointer'/></a>
                        <a href="https://helping-hands-nitp.herokuapp.com/" target="_blank"><BiLink className='text-3xl cursor-pointer' /></a>
                    </div>
                    </div>
               </div>

               <div className='max-w-xs m-12'>
                   <img src={project3} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                       Lincfree
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       Linkfree is a web-app that can generate a linktree for all your links.
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Hackaruto | 10 March 2022</p>
                       <div className='text-gray-500 flex'>
                        <a href="https://github.com/Hackaruto/linktree-clone"><AiOutlineGithub className='text-3xl mr-3 cursor-pointer'/></a>
                        <a href="https://lincfree.herokuapp.com/" target="_blank"><BiLink className='text-3xl cursor-pointer' /></a>
                    </div>
                    </div>
               </div>
 
        </div>
        </div>
    )
}

export default Projects;