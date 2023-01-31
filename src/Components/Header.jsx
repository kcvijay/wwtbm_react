import React from "react";

const Header = () => {
  return (
    <header className="w-full sm:flex justify-between bg-indigo-600 p-6">
      <p className="text-2xl text-white font-bold">
        Are you the next millionaire?
      </p>
      <nav>
        <ul>
          <li className="inline-block text-white mx-8">Sign Up</li>
          <li className="inline-block text-white mx-8">Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
