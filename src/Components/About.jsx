const About = () => {
  let skills = [
    {
      image: "src/assets/html.png",
      value: "HTML",
    },
    {
      image: "src/assets/css-3.png",
      value: "CSS",
    },
    {
      image: "src/assets/js-format.png",
      value: "JavaScript",
    },
    {
      image: "src/assets/atom.png",
      value: "React JS",
    },
    {
      image: "src/assets/node-js.png",
      value: "Node JS",
    },
    {
      image: "src/assets/database-storage.png",
      value: "Mongo DB",
    },
    {
      image: "src/assets/git.png",
      value: "Git VCS",
    },
    {
      image: "src/assets/github.png",
      value: "GitHub",
    },
    {
      image: "src/assets/wind.png",
      value: "Tailwind CSS",
    },
  ];
  return (
    <>
      <div id="about" className="h-[1300px] bg-zinc-950 text-white">
        <div className="about font-serif w-[1100px] relative left-32 top-8">
          <h1 className="text-4xl font-medium">About Me:</h1>
          <br />
          <p className="">
            Hello, my name is Tarun Nagle. I have completed my MERN stack web
            development training. I am looking for a entry level position for
            MERN Stack Developer or Front End Developer or Back-End Developer
          </p>
          <br />
          <p>
            During my training, I have learned these skills mentioned below:
          </p>
        </div>
        <div className="font-serif flex justify-between flex-wrap w-[1050px] relative top-16 left-32">
          {skills.map((value, index) => {
            return (
              <div key={index} className="border-2 my-8 w-72 h-72 rounded-xl">
                <img src={value.image} alt="image" className="w-60 mx-5 mt-2"/>
                <h1 className="flex justify-center mt-2">{value.value}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
