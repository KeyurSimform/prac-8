import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../components/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../components/SignUp/SignUp";
const Routes = () => {
  const isAuth = useSelector((state) => {
    return state.user.isLoggedIn;
  });
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/signup" />
      </Route>
      <PrivateRoute path="/homepage" auth={isAuth} redirect="/signup">
        <HomePage />
      </PrivateRoute>
      <PrivateRoute path="/signup" redirect="/homepage" auth={!isAuth}>
        <SignUp />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
