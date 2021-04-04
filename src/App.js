import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import Data from "./Data";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
// import Search from "./components/Search";
import history from "./history";
import { getMathes } from "./api/Api";

import React, { useEffect, useState } from "react";

function App() {
  const [searchdata, setsearchdata] = useState("");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMathes()
      .then((data) => {
        setMatches(data.matches);
      })
      .catch((error) => alert("could not load data"));
  }, []);

  return (
    <Router>
      <Navbar searchdata={searchdata} setsearchdata={setsearchdata} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MyNavBar" component={MyNavBar} />
        {matches.length > 0 && (
          <Route
            exact
            path="/data"
            component={() => <Data searchdata={searchdata} matches={matches} />}
          />
        )}

        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/logIn" component={LogIn} />

        {/* <Route exact path="/Search" component={Search} /> */}

        {/* <Search searchdata={searchdata} setsearchdata = {setsearchdata} />  */}

        {/* <Route exact path='/Search' render={(props)=> <Search searchdata = {searchdata} setsearchdata= {setsearchdata}/>} /> */}
      </Switch>
    </Router>
  );
}

export default App;
