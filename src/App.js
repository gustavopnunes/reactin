import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Form from "./components/Form";
import Layout from "./components/Layout";
import { GlobalStyles } from "./GlobalStyles";
import { AuthContext } from "./providers/AuthContext";

function App() {
  const { authenticated } = useContext(AuthContext);
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/feed">
          {!authenticated && <Redirect to="/" />}
          <Layout />
        </Route>
        <Route path="/">
          {authenticated && <Redirect to="/feed" />}
          <Form></Form>
        </Route>
      </Switch>
    </>
  );
}

export default App;
