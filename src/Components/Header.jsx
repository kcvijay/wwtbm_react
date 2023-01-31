import React from "react";

const Header = ({ newQsnHandler, gameStart, showBreakPageHandler }) => {
  return (
    <div className="action-bar bg-slate-800 h-24 p-4 flex justify-center gap-6 rounded-full">
      <button
        className="primary-btn bg-green-500 border-2 border-green-500 hover:bg-white disabled:bg-slate-300 disabled:text-white transition-all duration-300"
        onClick={newQsnHandler}
        disabled={gameStart}
      >
        Start Game
      </button>
      <button
        className="primary-btn text-black bg-slate-200"
        onClick={showBreakPageHandler}
      >
        Take Break
      </button>
      <button className="red-btn">Quit Game</button>
    </div>
  );
};

export default Header;
