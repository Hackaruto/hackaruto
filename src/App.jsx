import { useState } from "react";
import "./index.css";
import {
  Hero,
  Footer,
  Loader,
  NavBar,
  About,
  Projects,
  Domains,
  Events,
  Team,
  Contact,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RuleBook from "./pages/RuleBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen hackaruto-body">
              <div className="">
                <Loader />
                <NavBar />
                <Hero />
                <About />
                <Projects />
                <Domains />
                <Events />
                <Team />
                <Contact />
              </div>

              <Footer />
            </div>
          }
        />
        <Route
          path="/rulebook"
          element={
            <div className="min-h-screen hackaruto-body">
              <RuleBook/>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
