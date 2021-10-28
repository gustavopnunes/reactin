import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Form from "./components/Form";
import Layout from "./components/Layout";
import { GlobalStyles } from "./style/GlobalStyles";
import { AuthContext } from "./providers/AuthContext";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./providers/ThemeContext";

function App() {
  const { theme } = useTheme();
  const { authenticated } = useContext(AuthContext);
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
