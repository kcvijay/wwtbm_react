import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-8">
      <Outlet />
    </main>
  );
};

export default Main;
