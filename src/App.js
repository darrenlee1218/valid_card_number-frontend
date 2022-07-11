//App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/screens/card-number-input-screen";
function App() {
  return (
    <Router>
      <Routes>
        <Route exast path="/" element={<Card />} />
      </Routes>
    </Router>
  );
}
export default App;
