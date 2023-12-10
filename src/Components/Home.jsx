import { Link } from "react-scroll";
import man from "../assets/man.png";
import programmer from "../assets/programmer.png";

const Home = () => {
  return (
    <>
      <div>
        <div className="font-serif text-white">
          <div className="navbar w-full bg-gray-900  h-16 flex justify-between">
            <div className="Name mx-40 my-4 cursor-pointer ">
              <h1 className="text-slate-200 text-2xl hover:text-violet-700 transition-all duration-1000">
                Tarun Nagle
              </h1>
            </div>
            <div className="Links mx-40 my-5">
              <ul className="flex w-[480px] justify-between cursor-pointer">
                <li className=" text-lime-600">Home</li>
                <li className="text-slate-200 hover:text-lime-600 transition-all duration-500">
                  <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="link"
                  >
                    About Me
                  </Link>
                </li>
                <li className="text-slate-200 hover:text-lime-600 transition-all duration-500">
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="link"
                  >
                    Projects
                  </Link>
                </li>
                <li className="text-slate-200 hover:text-lime-600 transition-all duration-500">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="link"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero bg-slate-950 h-[650px] flex justify-between">
            <div className="info mx-24 my-12 relative h-[400px] top-28">
              <div className="text-2xl font-light">
                <div className="my-8 relative left-12">
                  <h3 className="text-4xl text-white">Hello, I am</h3>
                  <h1 className="text-6xl text-amber-600 my-4">Tarun Nagle</h1>
                  <h4 className="text-white">
                    I am a Beginner MERN Stack Developer
                  </h4>
                  <h4 className="text-white">
                    React JS Developer, Back-End Developer
                  </h4>
                  <h4 className="text-white">
                    Programmer and Technology Enthusiast
                  </h4>
                </div>
              </div>
              <div className="flex w-80 justify-evenly relative left-6">
                <div className="flex border-2 w-32  justify-center rounded cursor-pointer hover:bg-orange-700 transition-all duration-300">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="link"
                  >
                    About Me
                  </Link>{" "}
                  <img src={man} className="mx-2" />
                </div>
                <div className="flex border-2 w-32  justify-center rounded cursor-pointer hover:bg-orange-700 transition-all duration-300">
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
            <div className="photo mx-24 my-12 relative h-[400px] top-28 right-12">
              <div>
                <img src={programmer} alt="My_Image" className="w-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
