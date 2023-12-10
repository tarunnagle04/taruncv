import { Link } from "react-scroll";
import man from "../assets/man.png";
import programmer from "../assets/programmer.png";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  let links = [
    {
      name: "Home",
      link: "navbar",
    },
    {
      name: "About Me",
      link: "about",
    },
    {
      name: "Projects",
      link: "m",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <>
      <div>
        <div className="font-serif text-white ">
          <div className="navbar bg-slate-900 flex justify-between">
            <div className="Name ">
              <h1 className="text-5xl p-7 text-center md:text-2xl md:mx-16 hover:text-violet-700 transition-all duration-1000 cursor-pointer">
                Tarun Nagle
              </h1>
            </div>
            <div className="hidden md:block ">
              <ul className="Links gap-8 flex py-8 px-48 text-xl cursor-pointer">
                {links.map((value, index) => {
                  return (
                    <li key={index} className="mx-4">
                      <Link
                        to={value.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-slate-200 hover:text-violet-700 transition-all duration-1000"
                      >
                        {value.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="hero bg-slate-950 md:flex md:h-[700px] md:items-center md:justify-around ">
            <div className="info py-16 ">
              <div className="p-5">
                <div className="text-2xl md:text-4xl text-justify">
                  <h3 className="px-5">Hello, I am</h3>
                  <h1 className="text-amber-500 text-5xl my-4 px-4">
                    Tarun Nagle
                  </h1>
                  <h4 className="text-white py-3 px-5">
                    I am a Beginner MERN Stack Developer,
                  </h4>
                  <h4 className="text-white py-3 px-5">
                    React JS Developer, Back-End Developer,
                  </h4>
                  <h4 className="text-white py-3 px-5">
                    Programmer and Technology Enthusiast
                  </h4>
                </div>
              </div>
              <div className="flex justify-between w-72 text-lg mx-10">
                <div className="border-2 rounded p-2 bg-slate-500 cursor-pointer">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="link"
                  >
                    About Me
                  </Link>{" "}
                  <img src={man} className="mx-2 hidden" />
                </div>
                <div className="border-2 rounded p-2 bg-slate-500 cursor-pointer">
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="link"
                  >
                    Projects
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <img src={programmer} alt="My_Image" className="w-80 mx-12 md:w-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ScrollToTop className="w-[28px] h-7 bg-orange-600" />
      </div>
    </>
  );
};

export default Home;
