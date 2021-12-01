import "./App.css";
//Import BrowserRouter, Route, and Routes from react-router-dom to be used in component
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Imports the Home component
import Home from "./components/Home.jsx";
//Imports the About component
import About from "./components/About.jsx";

//Imports the Donate component
import Donate from "./components/Donate";

//Imports the Animals component
import Animals from "./components/Animals.jsx";
//Imports the Wellness Center component
import WellnessCenter from "./components/WellnessCenter.jsx";
//Imports the Support component
import Support from "./components/Support.jsx";
//Imports the Volunteer component
import Volunteer from "./components/Volunteer.jsx";
//Imports the Contact component
import Contact from "./components/Contact.jsx";

import Navbar from "./components/Navbar";
//Function for the main app
function App() {
  //Returns various routes within BrowserRouter
  return (
    <>
      <div className="App">
<<<<<<< HEAD
        <div className="Navbar">
          {" "}
          <Navbar />{" "}
        </div>
=======
>>>>>>> 682e178314f4488a3f9a9bf32b12c2b1c46be185
        {/* BrowserRouter is used for client side routing with URL segments*/}
        <BrowserRouter>
        <div className="Navbar"> <Navbar /> </div>
          {/* Routes contains all of the routes */}
          <Routes>
            {/* Route is each individual route - utilizes the path and element prop. 
          Path reflects the URL path, element is where component is rendered */}
            {/* Routes to Home Component */}
            <Route path="/" element={<Home />} />
            {/* Routes to About Component */}
            <Route path="/about" element={<About />} />

            {/* Routes to Donate Component */}
            <Route path="/donate" element={<Donate />} />

            {/* Routes to Animals Component */}
            <Route path="/animals" element={<Animals />} />
            {/* Routes to Wellness Center Component */}
            <Route path="/wellness-center" element={<WellnessCenter />} />
            {/* Routes to Support Component */}
            <Route path="/support" element={<Support />} />
            {/* Routes to Volunteer Component */}
            <Route path="/volunteer" element={<Volunteer />} />
            {/* Routes to Contact Us Component */}
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
