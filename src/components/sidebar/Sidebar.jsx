import { TypeAnimation } from "react-type-animation";
function Sidebar() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="sm:w-[70%]  rounded-full shadow-2xl w-[60%] mt-20 sm:mt-0">
        <img
          src="./newpic.png"
          alt="my-pic"
          className="object-cover rounded-full"
        />
      </div>
      <div className="text-[#334155] mx-10 font-bold my-7 ">
        <TypeAnimation
          sequence={["Prashant Timilsina", 1000, "Frontend Developer", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Sidebar;
