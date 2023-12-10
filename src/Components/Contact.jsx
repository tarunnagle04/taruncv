/* eslint-disable react/jsx-no-target-blank */
import cv from "../assets/cv.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contact = () => {
  const alarm = () => {
    alert("Thank you for Visiting, Website is under Maintenance!");
  };
  return (
    <>
      <div id="contact" className="bg-teal-950 text-white">
        <div className="h-[600px] font-serif  w-[1050px] relative left-32 top-8 flex justify-around space-x-72">
          <div className="social w-[400]">
            <h1 className="text-4xl font-medium">Find Me On:</h1>
            <br />
            <h1 className="">Now, You Know Me. Connect With Me</h1>
            <br />
            <ul className="flex w-56 justify-around my-1">
              <li>
                <a href="src/assets/Tarun_Resume.pdf" download={"Tarun_CV"}>
                  <img src={cv} className="w-8" />
                </a>
              </li>
              <li>
                <a href="mailto:tarunnagle04@gmail.com">
                  <img src={gmail} className="w-9" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://tinyurl.com/tarunnagle04">
                  <img src={linkedin} className="w-8" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/tarunnagle04"
                  rel="noreferrer"
                >
                  <img src={github} className="w-8" />
                </a>
              </li>
            </ul>
          </div>
          <div className="form w-[400px] justify-between">
            <h1 className="text-4xl font-medium">Connect With Me:</h1>
            <br />
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name:"
                className="text-purple-900 h-12 w-96 px-4 rounded-md"
              />
              <br />
              <input
                type="text"
                placeholder="Email:"
                className="text-purple-900 h-12 w-96 px-4 rounded-md"
              />
              <br />
              <input
                type="text"
                placeholder="Message: You are Hired!"
                className="text-purple-900 h-28 px-4 w-96 rounded-md"
              />
              <br />
              <button
                onClick={alarm}
                className="border-2 p-2 px-4 rounded-lg hover:bg-lime-500 transition-all duration-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="footer flex justify-evenly font-sans text-xs m-2 font-medium">
          <li>Copyright 2023: All Rights Reserved</li>
          <li>Front End Developer</li>
          <li>Back End Developer</li>
          <li>MERN Stack Developer</li>
          <li>Tarun Nagle</li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
