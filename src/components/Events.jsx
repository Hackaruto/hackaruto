import "./Main.css";
import session3 from "./../../resources/session3.jpg";
import session2 from "./../../resources/introweb3.png";
import session1 from "./../../resources/memophilia.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const Events = () => {
  const events = [
    {
      img: session1,
      title: "Meme-Jutsu",
      description: "A 10 day meme competition on instagram.",
      platform: "Zoom",
      date: "2-9 Apr 2021",
      time: "",
      eventLink: "",
    },
    {
      img: session2,
      title: "Intro to Web3",
      description: "Introduction to Web 3.0 & Blockchain.",
      platform: "Zoom",
      date: "03.04.2022",
      time: "09:00 p.m",
      eventLink: "https://forms.gle/nQjeizWyMS7HJX8JA",
    },
    {
      img: session3,
      title: "Intro to Web3",
      description: "Introduction to Web 3.0 & Blockchain.",
      platform: "Zoom",
      date: "12.02.2022",
      time: "08:00 p.m",
      eventLink: "https://ahack.link/webinar-intro-to-web3",
    },
  ];
  return (
    <div className="mt-10 flex flex-col">
      <h3 className="text-center text-[rgb(0,148,255)] pt-10">Events</h3>
      <h1 className="text-center text-[#000] font-extrabold text-4xl">
        Upcoming Events
      </h1>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 m-[auto]">
        {/* <div className='max-w-xs m-12'>
                   <img src={session3} alt="" className='rounded-3xl' />
                   <h2 className='pt-8 pb-5 font-bold text-xl pl-0'>
                      Deep dive into Web3 
                   </h2>
                   <p className='text-gray-600 pb-3 text-sm'>
                       Introduction to Web 3.0 & Blockchain.
                   </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-gray-400 text-sm'>Zoom | 12.02.2022 | 08:00 p.m</p>
                       <div className='text-gray-500 flex'>
                       <a href="https://ahack.link/webinar-intro-to-web3"> <BiLink className='text-3xl cursor-pointer' /></a>
                    </div>
                    </div>
               </div>  */}

        {events.map((event, index) => (
          <div className="max-w-xs m-12">
            <img src={event.img} alt="" className="rounded-3xl" />
            <h2 className="pt-8 pb-5 font-bold text-xl pl-0">{event.title}</h2>
            <p className="text-gray-600 pb-3 text-sm">{event.description}</p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-gray-400 text-sm">
                {event.platform} | {event.date} | {event.title}
              </p>
              <div className="text-gray-500 flex">
                <a href={event.eventLink}>
                  {" "}
                  <BiLink className="text-3xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default Events;
