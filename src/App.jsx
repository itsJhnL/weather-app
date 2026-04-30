import React from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import backgroundImage from "../src/assets/images/background.jpg";

export default function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Navbar />
        <Home />
        {/* <Footer /> */}
      </div>
    </>
  );
}
