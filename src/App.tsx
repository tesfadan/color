import React, { useState } from "react";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./Style/Global.scss";

const App: React.FC = () => {
  return <>
    <Header />
    <Main />
    <Footer />
  </>
}


export default App;
