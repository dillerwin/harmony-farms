import "./App.css";
//Import BrowserRouter, Route, and Routes from react-router-dom to be used in component
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Imports the Home component
//import Home from "./components/Home.js";
//Imports the Shy Guy component
import About from "./components/About.jsx";

//Function for the main app
function App() {
  //Returns various routes within BrowserRouter
  return (
    <div className="App">
      {/* BrowserRouter is used for client side routing with URL segments*/}
      <BrowserRouter>
        {/* Routes contains all of the routes */}
        <Routes>
          {/* Route is each individual route - utilizes the path and element prop. 
          Path reflects the URL path, element is where component is rendered */}
          {/* Routes to Home Component */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* Routes to About Component */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
