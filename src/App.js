import "./App.css";
import Navbar from "./Components/Navbar";
// import Nav from './Components/Nav';

// import Contact from './Components/Contact';
// import About from "./Components/About";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Detailbox from "./Components/Detailbox";
import { useState } from "react";
// import Foam from "./Components/Foam";
import React from "react";

function App() {
  // const router =createBrowserRouter ([

  //   {
  //     path:"/contact", element:
  //     <div>

  //    <Nav/>
  //     <Contact/>
  //     </div>

  //   },
  //   {

  //     path:"/about", element:
  //     <div>

  //    <Nav/>

  //     <About/>
  //     </div>
  //   }
  //   ])

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
      setTimeout( () =>{

        setAlert(null)
      },1500);
  }
    const togglestyle = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#081154";
        document.body.style.color = "white";
        showAlert("Dark mode has been enable", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("light mode has been enable", "success");
      }
    };
    return (
      <>
        <Navbar mode={mode} togglestyle={togglestyle}  />
        {/* <About /> */}

        {/* <RouterProvider router={router}/> */}
       <Alert alert={alert}/> 
        <Detailbox mode={mode} showAlert={showAlert}/> 

        {/* <Foam/>  */}
        {/* <Nav/> */}
      </>
    );
  }


export default App;
