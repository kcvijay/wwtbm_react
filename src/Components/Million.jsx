import React from "react";

const Million = ({ toggleMillion }) => {
  return (
    <div className="fixed w-[100vw] h-[100vh] bg-[#ff8c00] flex justify-center items-center top-0 left-0">
      <div className="flex flex-col justify-between items-center gap-6 border-2 border-white rounded-xl p-8">
        <p className="text-[50px] text-white">Congratulations!!!</p>
        <p className="text-3xl text-white">You won A Million !</p>
        <p
          className="material-icons text-red-500 hover:text-red-400 transition-all duration-300 text-[50px] cursor-pointer"
          onClick={toggleMillion}
        >
          close
        </p>
      </div>
    </div>
  );
};

export default Million;
