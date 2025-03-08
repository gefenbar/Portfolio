import React from "react";

const ScrollToTop = () => {
  return (
    <div className="fixed top-[90%] right-5 z-50 scroll-to-top">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fa-solid fa-arrow-up rounded-full text-[#2563eb]  hover:text-white text-2xl hover:bg-[#2563eb] p-4 my-4"
      ></button>
    </div>
  );
};

export default ScrollToTop;
