import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-10 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl text-center font-bold">Contact Me</h2>
      <p className="text-center mb-16 mt-2 text-trueGray-500">
        Any questions? Feel free to contact me
      </p>
      <div className="space-y-3">
        <div className="flex items-center space-x-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
          <a href="mailto:harshtripathi9520@gmail.com" className="text-lg">
            harshtripathi9520@gmail.com
          </a>
        </div>
        <div className="flex space-x-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <a href="tel:+919520423518" className="text-lg">
            +91-9520423518
          </a>
        </div>
        <div className="flex space-x-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <a href="https://goo.gl/maps/wnDzLNFLQY6W1o1y6" target="_blank" rel="noreferrer" className="text-lg">
            Gorakhpur, Uttar Pradesh
          </a>
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1WCmX0TTCz5lCNLkxwvC_k2NGRXperwNl/view?usp=sharing"
        className="text-xl mt-10 bg-stone-100 shadow-xl dark:bg-trueGray-800 px-12 py-4 rounded-2xl text-trueGray-600 dark:text-stone-100 font-medium"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Contact;
