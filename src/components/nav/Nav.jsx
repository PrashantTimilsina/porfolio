import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed z-10 flex w-full items-center justify-between bg-[#52525b] text-[#f1f5f9]">
      <div>
        <h1 className="m-4 text-2xl tracking-widest">
          <span className="text-3xl text-[#7dd3fc]">P</span>
          rashant
        </h1>
      </div>

      <ul
        className={`sm:flex items-center justify-center  sm:space-x-11 px-11 text-xl text-[#f1f5f9] absolute sm:relative bg-[#52525b] sm:bg-transparent top-[70px] sm:top-auto   right-0 w-full sm:w-auto transition-all duration-300 ease-in-out ${
          show
            ? "translate-x-0 opacity-100 pointer-events-auto gap-6 py-3"
            : "translate-x-full opacity-0 pointer-events-none"
        } sm:translate-x-0 sm:opacity-100 sm:pointer-events-auto`}
        onClick={() => setShow(!show)}
      >
        <a href="#home">
          <li className="justify-self-center px-4 hover:border-b-2 hover:border-[#cbd5e1] sm:px-0">
            Home
          </li>
        </a>
        <a href="#skills">
          <li className="justify-self-center px-4 hover:border-b-2 hover:border-[#cbd5e1] sm:px-0">
            Skills
          </li>
        </a>
        <a href="#projects">
          <li className="justify-self-center px-4 hover:border-b-2 hover:border-[#cbd5e1] sm:px-0">
            Projects
          </li>
        </a>
        <a href="#contact">
          <li className="justify-self-center px-4 hover:border-b-2 hover:border-[#cbd5e1] sm:px-0">
            Contact
          </li>
        </a>
      </ul>

      <div className="mr-4 flex items-center justify-center text-xl sm:hidden">
        {show ? (
          <IoClose
            onClick={() => setShow(false)}
            className="cursor-pointer text-2xl"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setShow(true)}
            className="cursor-pointer text-2xl"
          />
        )}
      </div>
    </div>
  );
}

export default Nav;
