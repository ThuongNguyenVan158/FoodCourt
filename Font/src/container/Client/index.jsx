import React, { Component } from "react";
import Footer from "../../components/Footer-Client/footer";
import Header from "../../components/Header-Client/header";
import { Route } from "react-router-dom";
function LayoutHome(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default class HomeTemplate extends Component {
  render() {
    const { exact, path, component } = this.props;
    return (
      <LayoutHome>
        <Route exact={exact} path={path} component={component} />
      </LayoutHome>
    );
  }
}
