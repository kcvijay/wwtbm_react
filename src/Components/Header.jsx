import React from "react";

const Header = ({ newQsnHandler, gameStart, showBreakPageHandler }) => {
  return (
    <div className="action-bar bg-slate-800 h-24 p-4 flex justify-center gap-6 disabled:bg-slate-400 rounded-full">
      <button
        className="primary-btn bg-green-500 disabled:bg-slate-400"
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
