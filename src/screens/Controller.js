import React,{Fragment} from "react";
import Authentication from "./authentication/Authentication";
//import Home from "./home/Home";
//import { BrowserRouter as Router, Route } from "react-router-dom";

const Controller = () => {
  //const baseUrl = "/api/v1/";
  return (
    <Fragment>
      <Authentication />
    </Fragment>
  );
};

export default Controller;
/* 
<Router>
      <div className="main-container">
        <Route
          exact
          path="/"
          render={(props) => <Login {...props} baseUrl={baseUrl} />}
        />
      </div>
    </Router>

    */
