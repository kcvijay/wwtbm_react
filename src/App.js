import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Components/Home";
import Host from "./Components/Host";
import Functions from "./Functions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/functions" element={<Functions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
