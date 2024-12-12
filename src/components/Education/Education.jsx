import { FaUniversity } from "react-icons/fa";
function Education() {
  return (
    <div className="ml-4 mt-12 space-y-7 text-[#475569] sm:ml-20">
      <h1 className="font-bold sm:text-3xl">Education</h1>
      <ul className="list-disc space-y-3 pl-6 sm:text-2xl">
        <li>
          <span className="font-semibold">Running: </span>
          <FaUniversity className="mr-2 inline text-blue-500" />
          Bachelor of Science in Computer Science and Information Technology
        </li>
        <li>
          <span className="font-semibold">University:</span> Tribhuvan
          University, Kathmandu, Nepal
        </li>
      </ul>
      <div className="space-y-3">
        <h1 className="font-semibold sm:text-2xl">
          Courses and Certifications
        </h1>
        <ul className="ml-6 space-y-2 font-medium sm:text-xl">
          <li>The complete Javascript course</li>
          <li>CSS-The complete guide</li>
          <li>React-The complete Guide</li>
        </ul>
        <div className="mt-20 flex w-full flex-wrap space-y-3 sm:justify-evenly">
          <img
            src="./ACS.jpg"
            className="object-cover shadow-lg sm:h-80 sm:w-80"
          />
          <img
            src="./SEO.jpg"
            className="h-56 w-full object-cover shadow-lg sm:h-80 sm:w-80"
          />
          <img
            src="./Quiz.png"
            className="h-auto w-full object-cover shadow-lg sm:h-80 sm:w-80"
          />
          <img
            src="./TT.png"
            className="h-auto w-full object-cover shadow-lg sm:h-80 sm:w-80"
          />
          <img
            src="./Essay.png"
            className="h-auto w-full object-cover shadow-lg sm:h-80 sm:w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
