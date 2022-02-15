import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import MeModal from "./Components/MeModal";
import ProjectModal from "./Components/ProjectModal";
import Main from "./Components/Main";

import SingleGame from "./Pages/SingleGame";
import MyGames from "./Pages/MyGames";

import { useGlobalContext } from "./Context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const { games } = useGlobalContext();

  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <MeModal />
        <ProjectModal />
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route
            exact
            path="/:title"
            element={<SingleGame allGames={games} />}
          />
          <Route exact path="/Mygames" element={<MyGames />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
