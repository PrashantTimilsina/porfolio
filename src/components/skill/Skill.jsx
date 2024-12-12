import { DiHtml5 } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
function Skill() {
  return (
    <>
      <div className="ml-6 mt-20 sm:ml-12 sm:mt-14 sm:flex sm:gap-12 sm:space-y-9 sm:p-2 md:flex-col md:items-center md:justify-center md:gap-0 lg:flex-row lg:justify-start">
        <span className="self-start justify-self-center text-xl font-medium text-[#64748b] sm:flex-none sm:text-3xl lg:absolute lg:-bottom-8">
          Skills
        </span>
        <div className="mt-10 flex w-full cursor-pointer items-center justify-center space-x-4 rounded-lg border-b-slate-500 px-4 py-2 text-3xl font-bold shadow-2xl sm:w-[60%] sm:space-x-12 sm:justify-self-start sm:px-6 md:mt-1 md:w-[70%] md:px-12 lg:relative">
          <h1 title="HTML">
            <DiHtml5 />
            <span className="text-sm font-normal">HTML</span>
          </h1>
          <h1 title="CSS">
            <FaCss3 />
            <span className="text-sm font-normal">CSS</span>
          </h1>
          <h1 title="JAVASCRIPT">
            <AiOutlineJavaScript />
            <span className="text-sm font-normal">Javascript</span>
          </h1>
          <h1 title="REACT">
            <FaReact />
            <span className="text-sm font-normal">React</span>
          </h1>
          <h1 title="TAILWIND">
            <RiTailwindCssFill />
            <span className="text-sm font-normal">Tailwind</span>
          </h1>
          <h1 title="REDUX">
            <SiRedux />
            <span className="text-sm font-normal">Redux</span>
          </h1>
        </div>
        <div>
          <p className="mt-5 p-5 text-xl leading-8 tracking-wide text-[#334155] sm:p-8 sm:text-justify md:mt-1">
            I specialize in creating responsive web applications with HTML, CSS,
            JavaScript, React, and Tailwind CSS, combining functionality with
            modern design.
          </p>
        </div>
      </div>
    </>
  );
}

export default Skill;
