import Head from "next/head";
import MainLayout from "../layouts/MainLayout";

import { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

class Home extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <MainLayout>
          <h1>Hello There</h1>
        </MainLayout>
      </Provider>
    );
  }
}

export default Home;
