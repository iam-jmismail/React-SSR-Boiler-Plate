import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";

// Redux
import store from "./store";

// Main Route File
import routes from "./routes/index";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";

// Navigation Bar
import Navbar from "./components/Navbar/Navbar";

// Load Users
import { loadUser } from "./actions/AuthActions";

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const routeComponents = routes.map(
      ({ path, component, protectedRoute }, key) => {
        return !protectedRoute ? (
          <Route exact path={path} component={component} key={key} />
        ) : (
          <ProtectedRoute />
        );
      }
    );
    return (
      <>
        <Provider store={store}>
          <Navbar />
          <Switch>{routeComponents}</Switch>
        </Provider>
      </>
    );
  }
}

export default App;
