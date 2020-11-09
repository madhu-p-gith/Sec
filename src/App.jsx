import React, { Component } from "react";
import Contactus from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const AppBody = () => (
  <div className="app-body" style={{ flex: 1, width: "100%" }}>
    <Contactus />
    <Contactus />
    <Contactus />
  </div>
);

class App extends Component {
  state = {
    showSpinner: false,
  };

  onShowSpinner = () => {
    this.setState({ showSpinner: true });
  };

  onHideSpinner = () => {
    this.setState({ showSpinner: false });
  };

  render() {
    const { showSpinner } = this.state;

    return (
      <div className="main-container">
        <Header />
        <AppBody />
        <Footer />
        <Spinner show={showSpinner} />
      </div>
    );
  }
}

export default App;
