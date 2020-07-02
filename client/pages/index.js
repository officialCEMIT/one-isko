import Head from "next/head";
import MainLayout from "../layouts/MainLayout";

import React, { Component, useEffect } from "react";

import { Provider } from "react-redux";

import store from "../store/store";

import { loadUser } from "store/actions/authActions";

const Home = () => {
  useEffect(() => { // equivalent to componentWillMount();
    store.dispatch(loadUser());
    console.log("NICE")
  });
  return (
    <Provider store={store}>
      <MainLayout>
        <h1>Hello There</h1>
      </MainLayout>
    </Provider>
  )
}
export default Home;
