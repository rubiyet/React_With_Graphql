import CharactersList from "./components/CharactersList";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Character from "./components/Character";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <h1>ReelBoard Dev Teams</h1>
      <Routes>
        <Route strict path="/" element={< CharactersList />} />
        <Route strict path="/search" element={< Search />} />
        <Route strict path="/:id" element={< Character />} />
      </Routes>
    </div>
  );
}

export default App;
