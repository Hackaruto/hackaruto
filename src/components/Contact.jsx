import './Main.css'
const Contact = () => {
    return (
        <div>
           <h3 className="text-center text-[#0094FF] pt-10">Contact</h3>
        <h1 className="text-center text-[#000] font-extrabold text-4xl">
            Contact Us
        </h1>

        <div className='flex flex-col justify-evenly items-center'>
            

            <div className='flex flex-col justify-evenly md:gap-[5rem] mt-12 md:flex-row'>
            
                <div className='bg-orange-50 max-w-lg rounded-xl w-[20rem] text-center mt-5'>
                    <div className='m-5 flex flex-col justify-evenly items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </div>
                    <h2 className='text-2=xl font-bold text-orange-900 '>Mail Us</h2>
                    <a href="mailto:hackarutoclub@gmail.com"><h3 className='text-gray-500 mb-4'>hackarutoclub@gmail.com</h3></a>
                </div>
            </div>

            <div className='bg-orange-50 rounded-2xl max-w-xs md:max-w-3xl text-center mt-5 md:mt-12'>
                <h1 className='font-bold text-2xl text-orange-800 mt-5 mb-5'>
                    Wanna join our club?
                </h1>
                <p className='text-gray-500 pl-12 pr-12'>
                    Join here to become a part of Hackaruto.
                </p>
                
                <a href="https://linktr.ee/Hackaruto" target="_blank" rel="noopener noreferrer">
                    <button className='pt-2 pb-2 pl-6 pr-6 bg-orange-500 rounded-xl text-white m-8'>Register</button>
                </a>

            </div>
            

            </div>

        </div>
    )
}

export default Contact;