import React from "react";
//Component Imports */
import BounceBall from "./components/BounceBall";
import Header from "./components/Header";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "antiquewhite",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <div>
        <BounceBall />
        <BounceBall />
        <BounceBall />
        <BounceBall />
        <BounceBall />
      </div>
    </div>
  );
};

export default App;
