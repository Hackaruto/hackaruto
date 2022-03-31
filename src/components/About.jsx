import "./Main.css";
import vision from './../../resources/vision-image.png'
import about from './../../resources/about.jpg'
const About = () => {
  return (
    <div className="mt-12 md:mt-[4rem]" id="About">
      <h3 className="text-center text-[#0094FF]" >About</h3>
      <h1 className="text-center text-[#000] font-extrabold text-4xl">
        Not just any other
      </h1>
      <h1 className="text-center text-orange-500 font-extrabold text-4xl mt-2">
        Technical Club
      </h1>

      <div>
        <div className="flex container content-between items-center justify-center m-[auto] mt-20 mb-20 flex-col-reverse md:flex-col lg:flex-row">
          <div className='bg-orange-50 max-w-xs md:max-w-xl lg:max-w-xl lg:max-h-[23rem]'>
                <p className="text-orange-600 font-bold p-[1.7rem] pb-[0]">WHO WE ARE</p>
                <h2 className="text-orange-900 text-2xl font-extrabold p-[1.7rem] pb-[0rem] pt-[1rem]">Hackaruto is an open-source platform club build for all the coding enthusiasts around the world who are searching to learn the best coding practices and bring out some mind blowing ideas with their projects</h2>
                <p className="text-gray-700 p-[1.7rem] pb-[1rem]">We are a young and thriving community run by students based in India. Our community is supported by Hackclub and various other awesome student communities. We conduct and attend Workshops, Events, Hackathons and other fun Community meetups.</p>
          </div>
          <div>
            <img src={about} alt="" className="max-w-xs md:max-w-xl"/>
          </div>
      </div>
      </div>


      <h1 className="text-center text-[#000] font-extrabold text-4xl">
        Our Vision
      </h1>
      <h1 className="text-center text-orange-500 font-extrabold text-4xl mt-2">
        and Motivation
      </h1>

          <div className="flex flex-col items-center lg:flex-row md:flex-row justify-center lg:justify-evenly m-[auto] mt-[2rem] content-around self-center items-center mb-[3rem]">
              <div className="mt-[2rem]">
                     <img src={vision} alt="" className="max-h-[32rem] " />
              </div>
              <div className="max-w-md mt-[2rem] md:max-w-md lg:max-w-lg">
                   <h2 className="text-2xl md:text-xl font-extrabold pl-10 pr-10">
                       <span className="text-orange-600 text-3xl  md:text-xl">“</span> Hackaruto is an open source community run by awesome students from the community and our vision is to build a strong community for prospective<span className="text-orange-600 text-2xl md:text-xl"> attendees and mentors</span> that provide wings to the careers of the coders, and also provide them an awesome platform to share and cultivate their ideas. We help each other with our doubts and also run <span className="text-orange-600 text-2xl md:text-xl">community calls, exciting sessions</span> and much more. We want to provide everyone with <span className="text-orange-600 text-2xl md:text-xl">well-structured and concise codes of various projects</span> and help everyone in their coding journey. <span className="text-orange-600 text-3xl md:text-xl"> ”</span>
                   </h2>

                
              </div>
      </div>

      <div className="flex flex-col items-center justify-center">
           <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:max-w-[80%] m-[auto] mt-20 mb-20">
                <div className="flex rounded-2xl p-8 m-5 shadow-md items-center">
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-digit" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <rect x="9" y="12" width="3" height="5" rx="1" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M15 12v5" />
                      </svg>
                   </div>
                   <div className="pl-5">
                     <h1 className="text-orange-500 text-3xl font-bold">
                         3+
                     </h1>
                     <p>Projects</p>
                   </div>
             </div>

              <div className="flex rounded-2xl p-8 m-5 shadow-md items-center">
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-analytics" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="4" width="18" height="12" rx="1" />
                        <path d="M7 20h10" />
                        <path d="M9 16v4" />
                        <path d="M15 16v4" />
                        <path d="M9 12v-4" />
                        <path d="M12 12v-1" />
                        <path d="M15 12v-2" />
                        <path d="M12 12v-1" />
                      </svg>
                   </div>
                   <div className="pl-5">
                     <h1 className="text-orange-500 text-3xl font-bold">
                         4+
                     </h1>
                     <p>Webinars and Workshops</p>
                   </div>
             </div>

              <div className="flex rounded-2xl p-8 m-5 shadow-md items-center">
                   <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="13" y="8" width="8" height="12" rx="1" />
                        <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                        <line x1="16" y1="9" x2="18" y2="9" />
                      </svg>
                   </div>
                   <div className="pl-5">
                     <h1 className="text-orange-500 text-3xl font-bold">
                         8+
                     </h1>
                     <p>Hard working members</p>
                   </div>
             </div>

           </div>  

           <div className="grid grid-cols-1 lg:grid-cols-3 m-[auto] items-center gap-10">
               <div className="max-w-sm md:max-w-lg lg:max-w-sm bg-sky-100 rounded-3xl">
                       <div className="p-2 pl-5 pt-8">
                             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <rect x="4" y="5" width="16" height="16" rx="2" />
                              <line x1="16" y1="3" x2="16" y2="7" />
                              <line x1="8" y1="3" x2="8" y2="7" />
                              <line x1="4" y1="11" x2="20" y2="11" />
                              <line x1="11" y1="15" x2="12" y2="15" />
                              <line x1="12" y1="15" x2="12" y2="18" />
                            </svg>
                       </div>
                       <h1 className=" text-2xl font-bold p-2 pl-5">Sessions</h1>
                       <p className="text-gray-500 p-2 pl-5 pb-8">We conduct a lot of awesome sesions for the community to get everyone familiar with differnent aspects of technologies.</p>
               </div>

               <div className="max-w-sm md:max-w-lg lg:max-w-sm bg-orange-100 rounded-3xl">
                       <div className="p-2 pl-5 pt-8">
                             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-3" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
                            </svg>
                       </div>
                       <h1 className=" text-2xl font-bold p-2 pl-5">Flagship Events</h1>
                       <p className="text-gray-500 p-2 pl-5 pb-8">Hackaruto is an open source platform that focuses on conducting many flagship events ranging from Open source events to Competitive Programming contests.</p>
               </div>

               <div className="max-w-sm md:max-w-lg lg:max-w-sm bg-green-100 rounded-3xl">
                       <div className="p-2 pl-5 pt-8">
                             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="13" y="8" width="8" height="12" rx="1" />
                            <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                            <line x1="16" y1="9" x2="18" y2="9" />
                          </svg>
                       </div>
                       <h1 className=" text-2xl font-bold p-2 pl-5">Workshop</h1>
                       <p id="Projects" className="text-gray-500 p-2 pl-5 pb-8">We believe the best way to learn is through experiencing and we make sure we give you lots of it through our awesome workshops.</p>
               </div>

           </div>
      </div>

    </div>
  );
};

export default About;
