// import { DiHtml5 } from "react-icons/di";
// import { FaCss3 } from "react-icons/fa";
// import { AiOutlineJavaScript } from "react-icons/ai";
// import { FaReact } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";

function Hero() {
  return (
    <div className="-mt-8 sm:mt-16">
      <div>
        <p className="mt-4 p-6 text-xl font-medium leading-10 tracking-wide text-[#64748b] sm:p-3 sm:text-2xl">
          Hello! I'm Prashant Timilsina, a passionate Full Stack Developer with expertise in React.js, Express.js, MongoDB, and more. I focus on creating seamless, responsive web applications from the front-end to the back-end. I'm dedicated to building modern, scalable solutions that provide exceptional user experiences. Welcome to my portfolio!
        </p>
      </div>
      <div className="ml-14 mt-2 flex items-center justify-start space-x-7 sm:mt-16 md:mr-7 md:p-7">
        <a href="#contact">
          <button className="flex items-center justify-center rounded-lg border bg-[#0f172a] p-4 px-4 text-sm font-medium text-[#f8fafc] shadow-xl sm:px-8 sm:text-2xl">
            Get in Touch
          </button>
        </a>
        <a href="./CV.pdf" download>
          <button className="flex items-center justify-center rounded-lg border bg-[#0f172a] p-4 px-8 text-sm font-medium text-[#f8fafc] shadow-xl sm:text-2xl">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
