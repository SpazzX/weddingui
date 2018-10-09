import React from "react";
import { Route } from "react-router-dom";
import Header from "../header";
const ReactRouter =()=>{
return (
  <React.Fragment>
    <Header />
      <Route exact path="/" component={App} />
      <Route  path="/posts" component={Posts} />
  </React.Fragment>
);
}
export default ReactRouter;
