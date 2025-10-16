import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatIsDevOps from "./pages/WhatIsDevOps";
import Toolchain from "./pages/Toolchain";
import CaseStudies from "./pages/CaseStudies";
import AboutMe from "./pages/AboutMe";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what-is-devops" element={<WhatIsDevOps />} />
      <Route path="/toolchain" element={<Toolchain />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
};

export default App;
