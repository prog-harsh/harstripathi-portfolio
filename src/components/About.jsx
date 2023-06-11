import React from "react";

const About = () => {
  return (
    <div id="about" className="p-10">
      <h2 className="text-3xl text-center font-bold">About Me</h2>
      <p className="text-center mb-16 mt-2 text-trueGray-500">
        A brief introduction about myself
      </p>
      <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-6 md:w-[80%] md:mx-auto">
        <div className="avatar">
          <div className="w-60 h-60  mask mask-hexagon duration-300 ">
            <img src="/harsh.png" alt="harshPic" />
          </div>
        </div>

        <p className="max-sm:text-sm">
          Hello! I'm Harsh Tripathi, a computer science and engineering graduate
          with expertise in programming languages like Java, JavaScript, Python,
          and C. I have a strong foundation in software development, along with
          skills in technologies like Flutter, React.js, TailwindCSS, HTML, CSS
          and SQL. My passion lies in mobile app development, and I have
          experience in building robust Android applications. I recently
          completed an internship at Dysmech Consultancy Services, where my team
          secured the first position by developing an Android application for
          remote control of home appliances. I actively pursue professional
          development opportunities, including participating in Google's DevFest
          2021, where I won prizes and gained insights from industry experts. I
          have even published an Android application on the Google Play Store
          using the Flutter framework. Thank you for visiting my portfolio
          website, and I hope to connect with you soon!
        </p>
      </div>
    </div>
  );
};

export default About;
