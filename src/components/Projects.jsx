import React from "react";
import moviesDb from "../assets/moviedb.jpg";
import colorify from "../assets/colorify.png";
import drFit from "../assets/dr.fit.jpg";
import todo from "../assets/todo.jpg";
import smarthome from "../assets/smarthome.jpg";
import quiz from "../assets/quiz.png";

const Projects = () => {
  let MyProjects = [
    {
      title: "Movies Database",
      description:
        "Built a movie database platform using React.js and Firebase, allowing users to search and view movie details.",
      techStack: "ReactJs, Firebase, JavaScript",
      image: moviesDb,
      live: "https://my-movies-pi.vercel.app/",
      source: "https://github.com/prog-harsh/Movies-Database",
    },
    {
      title: "Colorify",
      description:
        "Developed a Colorify website using React.js to generate and display randomized colors along with their corresponding hex codes.",
      techStack: "ReactJs, JavaScript",
      image: colorify,
      live: "https://colorify-prog-harsh.vercel.app/",
      source: "https://github.com/prog-harsh/Colorify",
    },
    {
      title: "Time Bound Quiz",
      description:
        "Developed a time-bound quiz application using ReactJS, showcasing proficiency in front-end web development and JavaScript frameworks.",
      techStack: "ReactJs, JavaScript",
      image: quiz,
      live: "https://wzk9d4.csb.app/",
      source: "https://codesandbox.io/s/time-bound-quiz-wzk9d4",
    },
    {
      title: "Dr.Fit – An Fitness App",
      description:
        "Created a comprehensive fitness app using Flutter and Dart, offering exercise planning, meditation, and yoga sessions.",
      techStack: "Flutter, Dart, Firebase",
      image: drFit,
      live: "https://github.com/prog-harsh/DR.Fit/releases/tag/v1.0.0",
      source: "https://github.com/prog-harsh/DR.Fit",
    },
    {
      title: "To Do App",
      description:
        "Developed a user-friendly To Do app using Flutter, a cross-platform framework. Enabled users to easily add and delete tasks with just a single click.",
      techStack: "Flutter, Dart",
      image: todo,
      live: "https://play.google.com/store/apps/details?id=com.harshtr.todoMobileApp&pli=1",
      source: "https://github.com/prog-harsh/TodoApp",
    },
    {
      title: "Smart Home App",
      description:
        "Developed an Android app for remotely managing home appliances. Implemented a phone-based login feature for secure user authentication.",
      techStack: "Flutter, Dart, Firebase",
      image: smarthome,
      live: "https://github.com/prog-harsh/SmartHomeApp",
      source: "https://github.com/prog-harsh/SmartHomeApp",
    },
  ];
  return (
    <div id="projects" className="p-10">
      <h2 className="text-3xl text-center font-bold">Projects</h2>
      <p className="text-center mb-16 mt-2 text-trueGray-500">
        Things I've built so far
      </p>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {MyProjects.map((project, i) => {
          return (
            <div
              key={i}
              className="bg-stone-50 border h-fit dark:border-none dark:bg-trueGray-800 shadow-lg hover:scale-105 duration-300 rounded-2xl"
            >
              <img
                src={project.image}
                alt=""
                className="bg-cover bg-center rounded-t-2xl h-28 w-full"
              />
              <div className="px-5 py-3">
                <h3 className="font-medium text-lg">{project.title}</h3>
                <p className="text-sm break-all text-trueGray-700 dark:text-zinc-400 mt-1">
                  {project.description}
                </p>
                <p className="text-xs text-trueGray-700 dark:text-zinc-400 mt-3.5">
                  <span className="font-medium">Tech stack:</span>
                  {project.techStack}
                </p>
                <div className="flex justify-between text-sm mt-3.5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.live}
                    className="hover:underline underline-offset-2"
                  >
                    Live Preview
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.source}
                    className="hover:underline underline-offset-2"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
