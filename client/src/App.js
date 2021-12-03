import "./App.css";
//Import BrowserRouter, Route, and Routes from react-router-dom to be used in component
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Imports the Home component
import Home from "./components/Home.jsx";
//Imports the About component
import About from "./components/About.jsx";
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
//Imports the NavBar
import Navbar from "./components/Navbar";
//imports the Raffle component
import Raffle from "./components/Raffle";
//Imports the Services component
import Services from "./components/Services.jsx";
//Imports the Donate component
import Donate from "./components/Donate.jsx";

import ReqAuth from "./admin/ReqAuth";
import AdminPage from "./admin/AdminPage";

//Function for the main app
function App() {
  //Returns various routes within BrowserRouter
  return (
    <>
      <div className="App">
        {/* BrowserRouter is used for client side routing with URL segments*/}
        <BrowserRouter>
          <div className="Navbar">
            <Navbar />
          </div>
          {/* Routes contains all of the routes */}
          <Routes>
            <Route path="/admin" element={<ReqAuth />} />
            <Route path="/admin/edit" element={<AdminPage />} />
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
            {/* Routes to Raffle Component */}
            <Route path="/raffle" element={<Raffle />} />
            {/* Routes to Raffle Component */}
            <Route path="/services" element={<Services />} />
            {/* Routes to Raffle Component */}
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
