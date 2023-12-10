import shopping from "../assets/shopping.png";
import salesforce from "../assets/salesforce.png";
import trolley from "../assets/trolley.png";
import vlog from "../assets/vlog.png";
import alarm from "../assets/alarm.png";
import todolist from "../assets/to-do-list.png";

const Projects = () => {
  const attention = () => {
    alert(
      "This website is under development, some features of this website might not work"
    );
  };
  let Projects = [
    {
      image: shopping,
      value: "Mastercard Connect Clone",
      desc: "I have developed a clone of Mastercard Connect website which Mastercard uses to connect with their customers for providing services",
      links: "",
      gitlinks: "",
    },
    {
      image: salesforce,
      value: "Salesforce Clone",
      desc: "I have cloned the Salesforce working environment on which various companies are working together to run their day to day business queries",
      links: "",
      gitlinks: "",
    },
    {
      image: trolley,
      value: "E-Commerce Website",
      desc: "I have developed a simple E-Commerce application using MERN Stack",
      links: "",
      gitlinks: "",
    },
    {
      image: vlog,
      value: "Vlog",
      desc: "I have created a vlog website which shows my interest and fun activities of my life",
      links: "",
      gitlinks: "",
    },
    {
      image: alarm,
      value: "Alarm_Clock",
      desc: "I have created this projected using HTML,CSS,JS which shows the time and you can make your daily schedule in this application.",
      links: "",
      gitlinks: "",
    },
    {
      image: todolist,
      value: "TODO APPLICATION",
      desc: "I have created this website in my period of MERN stack training to build my concepts.",
      links: "",
      gitlinks: "",
    },
  ];
  return (
    <>
      <div id="projects" className="h-[1100px] bg-purple-950 text-white">
        <div className="about font-serif w-[1100px] relative left-32 top-8">
          <h1 className="text-4xl font-medium">Featured Projects:</h1>
          <br />
          <p className="">
            I have worked on few projects during my training and currently I am
            working to improve my skills in MERN stack development
          </p>
          <br />
          <p>
            I have created few projects using MERN stack web development. Kindly
            visit my live website by clicking View Live button.
          </p>
        </div>
        <div className="font-serif flex justify-between flex-wrap w-[1050px] relative top-16 left-32">
          {Projects.map((value, index) => {
            return (
              <div
                onClick={attention}
                key={index}
                className="border-2 my-8 w-80 h-96 rounded-xl space-x-3 space-y-2"
              >
                <img src={value.image} className="w-40 mx-20 mt-4" />
                <h1 className="flex justify-center">{value.value}</h1>
                <h1 className="flex justify-center">{value.desc}</h1>
                <div className="flex border-2 w-32 bg-slate-200 text-slate-950 justify-center rounded cursor-pointer hover:bg-orange-700 transition-all duration-300">
                  <a href={`https:google.com`}>Visit</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
