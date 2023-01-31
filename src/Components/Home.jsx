import React, { useState } from "react";
import SignIn from "./Signin";
import SignUp from "./SignUp";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  return (
    <div>
      <h2 className="text-2xl text-center capitalize">Choose your role</h2>
      <div className="home-btns flex justify-center items-center gap-8 pt-8">
        <button
          className="primary-btn block w-full py-6 text-xl"
          onClick={showFormHandler}
        >
          Host
        </button>
        <button
          className="primary-btn block w-full py-6 text-xl"
          onClick={showFormHandler}
        >
          Player
        </button>
      </div>

      {showForm && (
        <div className="sm:grid sm:grid-cols-2 sm:items-start gap-8">
          <SignUp />
          <SignIn />
        </div>
      )}
    </div>
  );
};

export default Home;
