import React from "react";

const SignIn = () => {
  return (
    <div className="max-w-[600px] my-16 p-8 bg-violet-100 rounded-md shadow-md">
      <h2 className="text-xl mb-4 uppercase font-bold">signin</h2>
      <form>
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
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button className="primary-btn block w-full py-3">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
