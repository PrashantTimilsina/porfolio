import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <div className="sm:mt-20 sm:ml-14 p-7 w-full text-white mt-2 bg-[#334155] rounded-xl sm:w-[80%] m-2">
      <h1 className="sm:text-3xl text-2xl  ">Connect with me</h1>
      <div className="sm:text-2xl flex space-x-3 hover:text-[#94a3b8] flex-wrap text-xl text-white mt-5">
        <a href="https://github.com/PrashantTimilsina">
          <div className="flex items-center justify-start p-4 space-x-3  cursor-pointer ">
            <h1>Github</h1>
            <h1>
              <FaGithub />
            </h1>
          </div>
        </a>
        <a href="https://www.facebook.com/prashant.timilsina.752/">
          <div className="flex items-center justify-start p-4 space-x-3  cursor-pointer">
            <h1>Facebook</h1>
            <h1>
              <FaFacebook />
            </h1>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/prashant-timilsina-aa50922b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <div className="flex items-center justify-start p-4 space-x-3  cursor-pointer ">
            <h1>LinkedIn</h1>
            <h1>
              <FaLinkedin />
            </h1>
          </div>
        </a>
        <a href="https://www.instagram.com/prashant.timilsina.752?igsh=MTB3Z3c4MGhpeGNnZA%3D%3D&utm_source=qr">
          <div className="flex items-center justify-start p-4 space-x-3  cursor-pointer ">
            <h1>Instagram</h1>
            <h1>
              <FaInstagram />
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
