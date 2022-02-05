import './Main.css'
import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';

const TeamBP = ({imgSrc,name,designation,github,twitter,linkedin}) => {
    return (
        <div className='m-8'>
            <img src={imgSrc} alt=""  className='rounded-3xl h-[18rem] w-[16rem]'/>
            <h1 className='font-bold text-lg mt-4 text-center'>{name}</h1>
            <h3 className='text-md mt-1 text-sky-500 text-center'>{designation}</h3>
            <div className='flex justify-center'>
                <a href={github}><AiOutlineGithub className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/></a>
                <a href={twitter}><TiSocialTwitter className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/></a>
                <a href={linkedin}><TiSocialLinkedin className='text-4xl m-3 ml-0 bg-gray-200 rounded-[50%] p-1 text-gray-600 cursor-pointer'/></a>
            </div>
        </div>
    )
}

export default TeamBP
