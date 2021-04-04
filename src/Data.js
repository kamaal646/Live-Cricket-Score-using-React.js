import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import MyCard from "./components/MyCard";

import { Grid } from "@material-ui/core";

function App({ searchdata, matches }) {
  // const [matches, setmatches] = useState(matches);

  const [result, setResult] = useState([]);

  useEffect(() => {
    if (matches && matches.length > 0) {
      const filteredProducts = matches.filter(
        (product) =>
          product["team-2"].toLowerCase().includes(searchdata) && product
      );
      if (filteredProducts.length > 0) {
        setResult(filteredProducts);
      }
    }
    // setFilter(filteredProducts, console.log(filteredProducts));
  }, [matches]);

  if (result.length > 0 && searchdata) {
    return (
      <div className="App">
      {console.log("Results",result)}
        <h1> welcome to live score </h1>
        <h1>Searched Matches </h1>

        <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
            {result &&
              result.length > 0 &&
              result.map(
                (match) =>
                    <Fragment key={match.unique_id}>
                      <MyCard key={match.unique_id} match={match} />
                    </Fragment>
              )}
          </Grid>
        </Grid>
      </div>
    );
  } else
    return (
      <div className="App">
        <h1> welcome to live score </h1>

        <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
            {matches &&
              matches.length > 0 &&
              matches.map(
                (match) =>
                  match.type === "ODI" && (
                    <Fragment key={match.unique_id}>
                      <MyCard key={match.unique_id} match={match} />
                    </Fragment>
                  )
              )}
          </Grid>
        </Grid>
      </div>
    );
}

export default App;
