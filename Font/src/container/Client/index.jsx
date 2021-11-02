import React, { Component } from "react";
import Footer from "../../components/Footer-Client/footer";
import Header from "../../components/Header-Client/header";
import { Route } from "react-router-dom";
function LayoutHome(props) {
<<<<<<< HEAD
<<<<<<< HEAD
  const path = props.children.props.path;
=======
>>>>>>> nhat
=======
  // const path = props.children.props.path;
>>>>>>> a022d41766c16528cb2fca8dc82ef9889a35e14a
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
