import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 rounded-full right-5 text-xl bg-stone-200 shadow-xl dark:bg-trueGray-800 z-10 w-12 h-12 ${
        visible ? "inline" : "hidden"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mx-auto"
        fill="currentColor"
        data-name="Layer 1"
        viewBox="0 0 512 512"
        id="top-arrow"
      >
        <g data-name="<Group>">
          <polygon
            points="256 217.463 403.785 365.248 439.141 329.893 256 146.752 72.859 329.893 108.215 365.248 256 217.463"
            data-name="<Path>"
          ></polygon>
        </g>
      </svg>
    </button>
  );
};

export default ScrollButton;
