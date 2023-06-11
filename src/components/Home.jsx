import React from "react";
import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="flex flex-grow justify-center items-center flex-col sm:flex-row px-3 md:justify-around md:items-center md:flex-row dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black">
      <div>
        <p className="text-3xl md:text-5xl font-bold">Hi 👋</p>
        <p className="text-3xl md:text-5xl font-bold">My Name is</p>
        <p className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-cyan-600 font-Rancho">
          Harsh Tripathi
        </p>
        <p className="text-3xl md:text-5xl font-bold">I build things for web</p>
      </div>
      <div>
        <img src={image} alt="heroImg" className="w-80 h-80 md:w-96 md:h-96" />
      </div>
    </div>
  );
};

export default Home;
