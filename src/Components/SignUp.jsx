import React from "react";

const SignUp = () => {
  return (
    <div className="max-w-[600px] my-16 p-8 bg-violet-100 rounded-md shadow-md transition-all duration-300">
      <h2 className="text-xl mb-4 uppercase font-bold">signup</h2>
      <form>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Ex. John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Ex. sample@website.com"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="email">Repeat Password</label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            required
          />
        </div>
        <button className="primary-btn block w-full py-3">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
