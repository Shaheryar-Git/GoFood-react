import React from "react";
import Cards from "./Cards";
import Slidebar from "./Slidebar";
import Navbar from "./Navbar";
import ClipLoader  from "react-spinners/ClipLoader";
import { useState,useEffect } from "react";   


const Home = () => {

  const [loaders, setLoaders] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaders(false);
    }, 2000);
  }, []);
  

  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Set minimum height to fill the entire viewport
  };


if (loaders) {
  return (
    <div style={loaderContainerStyle}>
      <ClipLoader
        className="loader fw-bolder"
        color={"#FFCB04"}
        loading={loaders}
        cssOverride={800}
        size={250}
        aria-label="Loader Spinner"
        data-testid="loader"
      />
    </div>
     )
    
     
  }
  return (
    <div className="bg-white">
      <Navbar/>
      <Slidebar />
        <Cards />
      
    </div>
  );
};

export default Home;
