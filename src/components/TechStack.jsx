import React from "react";
import react from "../assets/react.png";
import flutter from "../assets/flutter.png";
import javaScript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import git from "../assets/git.png";
import python from "../assets/python.png";
import redux from "../assets/redux.png";

const TechStack = () => {
  return (
    <div id="tech-stack" className="p-10">
      <h2 className="text-3xl font-bold text-center">My Tech Stack</h2>
      <p className="text-center mb-16 mt-2 text-trueGray-500">
        Technologies I've been working with recently
      </p>
      <div className="flex flex-wrap justify-center  md:justify-around">
        <img src={react} alt="" className="w-28 h-28" />
        <img src={flutter} alt="" className="w-28 h-28" />
        <img src={javaScript} alt="" className="w-28 h-28" />
        <img src={html} alt="" className="w-28 h-28" />
        <img src={css} alt="" className="w-28 h-28" />
        <img src={tailwind} alt="" className="w-28 h-28" />
        <img src={java} alt="" className="w-28 h-28" />
        <img src={git} alt="" className="w-28 h-28" />
        <img src={python} alt="" className="w-28 h-28" />
        <img src={redux} alt="" className="w-28 h-28" />
      </div>
    </div>
  );
};

export default TechStack;
