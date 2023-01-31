import React from "react";

const GreetPage = ({ greetText, amount, toggleWin }) => {
  return (
    <div className="fixed w-[100vw] h-[100vh] bg-[#000000ee] flex justify-center items-center top-0 left-0">
      <div className="flex flex-col items-center max-w-[60vw] bg-slate-800 border-2 border-white rounded-xl p-8">
        <p className="text-white text-[32px]">{greetText}</p>
        <p className="text-white text-[32px]">{amount}</p>
        <p
          className="material-icons text-red-500 hover:text-red-400 transition-all duration-300 text-[50px] cursor-pointer"
          onClick={toggleWin}
        >
          close
        </p>
      </div>
    </div>
  );
};

export default GreetPage;
