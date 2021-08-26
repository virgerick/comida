import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./main.scss";
import "bootstrap/dist/js/bootstrap";
import CreateUpdatePlatos from "./pages/platos/CreateUpdatePlatos";
import Platos from "./pages/platos/Platos";
import Category from "./pages/category/Category";
import CreateEditCategory from "./pages/category/CreateEditCategory";
import NavBar from "./layouts/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="pt-5">
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route exact path="/platos" component={Platos} />
            <Route
              exact
              path={["/platos/create", "/platos/edit/:id"]}
              component={CreateUpdatePlatos}
            />
            <Route exact path="/category" component={Category} />{" "}
            <Route
              exact
              path={["/category/create", "/category/edit/:id"]}
              component={CreateEditCategory}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
