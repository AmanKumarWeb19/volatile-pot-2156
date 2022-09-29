import React from "react";
import Feature from "./Pages/Feature";
import Pricing from "./Pages/Pricing";
import Resources from "./Pages/Resources";
import Customers from "./Pages/Customers";
import Gallery from "./Pages/Gallery";
import Agencies from "./Pages/Agencies";
import Contactus from "./Pages/Contactus";
import Login from "./Pages/Login";
import Tryitfree from "./Pages/Tryitfree";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  const theme = {
    colors: {
      black: "rgb(17,19,36)",
      purple: "rgb(120,86,255)",
      white: "rgb(255,255,255)",
      footer_bg: "rgb(17,19,36)",
      gray:"rgb(142,149,168)",
      sky: "rgb(17,19,36)",
      blue: "rgb(120,86,255)",
      box_shadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      shadow_support: "rgba(0,0,0,0.16)0px 1px 4px",
      gradient: "linear-gradient(0deg,rgb(132 144 255) 0% rgb(98 189 252)100%)",
      text: "rgb(17,19,36)",
      btn_color: "rgb(120,86,255)",
      hover_color: "rgb(81,207,219)",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/agencies" element={<Agencies />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tryitfree" element={<Tryitfree />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
export default App;
