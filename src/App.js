import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewItem from "./components/NewItem";
import Navbar from "./components/Navbar";
import React from "react";

const App = () => {
  const apikey = process.env.REACT_APP_API_KEY;
  console.log(apikey)
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }}></div>
      <h1 className="text-center">The News App</h1>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<NewItem type="general" catagory="general" apikey={apikey} />}
          />
          <Route
            path="/india"
            element={<NewItem type="india" catagory="india" apikey={apikey} />}
          />
          <Route
            path="/world"
            element={<NewItem type="world" catagory="world" apikey={apikey} />}
          />
          <Route
            path="/sports"
            element={<NewItem type="sports" catagory="sports" apikey={apikey} />}
          />
          <Route
            path="/business"
            element={<NewItem type="business" catagory="business" apikey={apikey} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
