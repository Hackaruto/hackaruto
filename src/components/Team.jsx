import './Main.css'
import TeamBP from './TeamBP';
import priyanshu from './../../resources/priyanshu.jpg'
import pratik from './../../resources/Pratik.jpg'
import harsh from './../../resources/Harsh.jpg'
import raj from './../../resources/Raj.jpg'
import firdaus from './../../resources/Firdaus.jpg'
import sudhanshu from './../../resources/sudhanshu.jpg'
import rishabh from './../../resources/Rishabh.jpg'
import avinash from './../../resources/avinash.jpg'


const data = [
    {
        imgUrl:harsh,
        name:"Harsh Kumar",
        designation:"Founder & Tech lead",
        github:"https://github.com/Harshkumar62367",
        twitter:"https://twitter.com/@spectre_harsh07",
        linkedin:"https://linkedin.com/in/harsh-kumar-125ba8200"
    },
    {
        imgUrl:sudhanshu,
        name:"Sudhanshu Ranjan",
        designation:"Founder & Tech lead",
        github:"https://github.com/SudhansuuRanjan",
        twitter:"https://twitter.com/sushanss_u",
        linkedin:"https://linkedin.com/in/sudhanshu-ranjan-a1779b202"
    },
    {
        imgUrl:pratik,
        name:"Pratik Anand",
        designation:"Founder & Tech lead",
        github:"https://github.com/pratik8696",
        twitter:"https://twitter.com/mepratikanand",
        linkedin:"https://www.linkedin.com/in/pratik-anand-/"
    },
    {
        imgUrl:firdaus,
        name:"Firdaus Jawed",
        designation:"Operations lead",
        github:"https://github.com/FirdausJawed",
        twitter:"https://twitter.com/jawedfirdaus01",
        linkedin:"https://www.linkedin.com/in/firdaus-jawed/"
    },
    {
        imgUrl:rishabh,
        name:"Rishabh Prakash",
        designation:"Domain Lead",
        github:"https://github.com/Rishabh-25-code",
        twitter:"",
        linkedin:"https://www.linkedin.com/in/rishabh-prakash-5b8299203/"
    },
    {
        imgUrl:avinash,
        name:"Avinash Kumar",
        designation:"Operations Lead",
        github:"https://github.com/errorcode-4o4",
        twitter:"",
        linkedin:"https://www.linkedin.com/in/avinash-singh-38bb01203/"
    },
    {
        imgUrl:raj,
        name:"Raj More",
        designation:"Design Lead",
        github:"https://github.com/Raj82862",
        twitter:"https://twitter.com/RajMore06",
        linkedin:"https://www.linkedin.com/in/raj-more-50b543202/"
    },
    {
        imgUrl:priyanshu,
        name:"Priyanshu Shekhar",
        designation:"Design Lead",
        github:"https://github.com/PriUY",
        twitter:"https://twitter.com/@Priyans08981606",
        linkedin:"https://linkedin.com/in/priyaanshu/"
    }
]

const Team = () => {

    function getTeamMembers(){
        return (
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-[auto] mt-8">
            {data.map((member, id) => {
              return (
                <TeamBP
                  imgSrc={member.imgUrl}
                  name={member.name}
                  designation={member.designation}
                  github={member.github}
                  twitter={member.twitter}
                  linkedin={member.linkedin}>
                 </TeamBP>
              );
            })}
          </div>
        );
    }

    return (
      <div className="flex flex-col justify-center items-center ">
        <div className="m-[auto] max-w-lg">
          <h3 className="text-center text-[#0094FF] pt-10">Team</h3>
          <h1 className="text-center text-[#000] font-extrabold text-3xl">
            Meet the <span className="text-orange-500"> Hackaruto </span>team.
          </h1>
        </div>

        {getTeamMembers()}
      </div>
    );
}

export default Team;