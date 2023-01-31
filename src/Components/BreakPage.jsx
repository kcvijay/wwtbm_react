import React from "react";

const BreakPage = ({ toggleBreak }) => {
  return (
    <div className="fixed w-[100vw] h-[100vh] bg-[#000000ee] flex justify-center items-center top-0 left-0">
      <div className="flex justify-between items-center gap-6 border-2 border-white rounded-xl p-8">
        <p className="text-[50px] text-white">ON BREAK</p>
        <p
          className="material-icons text-red-500 hover:text-red-400 transition-all duration-300 text-[50px] cursor-pointer"
          onClick={toggleBreak}
        >
          close
        </p>
      </div>
    </div>
  );
};

export default BreakPage;
