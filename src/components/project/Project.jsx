import { useState } from "react";

const projects = [
  {
    name: "Weather App",
    URL: "https://cloudcastnepal.netlify.app",
    image:
      "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
    text: "Get real-time weather updates",
  },
  {
    name: "Chat App",
    URL: "https://kura-kani.netlify.app/",
    image: "https://cdn-icons-png.freepik.com/512/5962/5962463.png",
    text: "Connect and chat seamlessly",
  },
  {
    name: "Task List",
    URL: "https://task-list-2024.vercel.app/",
    image: "https://cdn-icons-png.flaticon.com/512/2098/2098402.png",
    text: "Organize your tasks efficiently",
  },
  {
    name: "Quiz App",
    URL: "https://quiz-app-orcin-five.vercel.app/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPpvsFnXMUo5RzX5mFFrO3geBTyrPzUOTlg&s",
    text: "Test your knowledge with fun quizzes",
  },
  {
    name: "Movies",
    URL: "https://cinepeak.netlify.app/",
    image:
      "https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg",
    text: "Discover trending movies and reviews",
  },
  {
    name: "Currency Converter",
    URL: "https://currency-converter-fh556nfe7-prashant-timilsinas-projects.vercel.app/",
    image:
      "https://www.shutterstock.com/image-vector/money-convert-icon-on-white-260nw-508690045.jpg",
    text: "Convert currencies with ease",
  },
];

function Project() {
  const [show, setShow] = useState(null);

  return (
    <div className="mt-8 sm:mt-14">
      <h1 className="flex items-center justify-center text-xl font-medium text-[#64748b] sm:text-3xl">
        Projects
      </h1>
      <div className="mt-1 flex flex-wrap gap-6 p-6 sm:justify-evenly">
        {projects.map((el, i) => (
          <a
            href={el?.URL}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[48%] lg:w-[24%]"
          >
            <div
              className="flex cursor-pointer items-center justify-center rounded-md p-6 px-8 shadow-2xl sm:flex-col"
              onMouseEnter={() => setShow(i)}
              onMouseLeave={() => setShow(null)}
            >
              <h1 className="px-4 py-2 text-xl font-semibold tracking-wide text-[#64748b]">
                {el?.name}
              </h1>
              <img src={el?.image} className="h-32 w-32 p-8 sm:h-48 sm:w-48" />
              {show === i && (
                <p className="animate-bounce rounded-lg bg-black p-2 text-white transition-all delay-75 duration-100 ease-in">
                  {el.text}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
