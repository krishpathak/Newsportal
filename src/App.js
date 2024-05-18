import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewItem from "./components/NewItem";
import Navbar from "./components/Navbar";
import React, { PureComponent } from "react";

const App =()=> {
  let apikey = process.env.REACT_APP_API_KEY;

    return (
      <>
        <Navbar />
        <h1 className="text-center">The news app</h1>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<NewItem type="general" category="home" /*apikey={this.apikey}*/ />}
            />
            <Route
              path="/india"
              element={<NewItem type="india" catagory="india" />}
            />
            <Route
              path="/world"
              element={<NewItem type="world" catagory="world"  />}
            />
            <Route
              path="/sports"
              element={<NewItem type="sports" catagory="sports" />}
            />
            <Route
              path="/usa"
              element={<NewItem type="usa" catagory="usa"  />}
            />
          </Routes>
        </Router>
      </>
    );
  }


export default App;
