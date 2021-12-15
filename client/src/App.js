//Imports
import "./App.css";
//Import BrowserRouter, Route, and Routes from react-router-dom to be used in component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Animals from "./components/Animals.jsx";
import Support from "./components/Support.jsx";
import Volunteer from "./components/VolunteerWaiver.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar";
import Raffle from "./components/Raffle";
import VisitUs from "./components/VisitUs.jsx";
import Donate from "./components/Donate.jsx";

import AdminAuth from "./admin/AdminAuth";
import { useEffect, useState } from "react";

//Function for the main app
function App() {
  const [imageJson, setImageJson] = useState([]);
  //fetch for images JSON

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((file) => setImageJson(file));
  }, []);

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
            <Route path="/admin" element={<AdminAuth />} />
            {/* Route is each individual route - utilizes the path and element prop. 
          Path reflects the URL path, element is where component is rendered */}
            {/* Routes to Home Component */}
            <Route path="/" element={<Home imageJson={imageJson} />} />
            {/* Routes to About Component */}
            <Route path="/about" element={<About />} />
            {/* Routes to Donate Component */}
            <Route path="/donate" element={<Donate />} />
            {/* Routes to Animals Component */}
            <Route path="/animals" element={<Animals />} />
            {/* Routes to Support Component */}
            <Route path="/support" element={<Support />} />
            {/* Routes to Volunteer Component */}
            <Route path="/volunteer" element={<Volunteer />} />
            {/* Routes to Contact Us Component */}
            <Route path="/contact" element={<Contact />} />
            {/* Routes to Raffle Component */}
            <Route path="/raffle" element={<Raffle />} />
            {/* Routes to Visit Us Component */}
            <Route path="/visit-us" element={<VisitUs />} />
            {/* Routes to Donate Component */}
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
