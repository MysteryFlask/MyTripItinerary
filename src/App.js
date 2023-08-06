import React, { useEffect } from "react";
import ItinerarySection from "./ItinerarySection";
import "./style.css";
import usePersistentState from "./usePersistentState";

const App = () => {
  const [itinerary, setItinerary] = usePersistentState("itinerary", []);

  const handleAddSection = () => {
    const newSection = {
      id: Date.now(), // Unique identifier for each section
      date: "", // Replace with your custom date format logic
      background: "",
      content: ""
    };
    setItinerary((prevItinerary) => [...prevItinerary, newSection]);
  };

  const handleSectionUpdate = (id, updates) => {
    setItinerary((prevItinerary) =>
      prevItinerary.map((section) =>
        section.id === id ? { ...section, ...updates } : section
      )
    );
  };

  const handleSectionDelete = (id) => {
    setItinerary((prevItinerary) =>
      prevItinerary.filter((section) => section.id !== id)
    );
  };

  const setBackground = (tag, textcolor) => {
    document.body.style.background = `url('websitefiles/${tag}.png')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    document.getElementsByTagName('H1')[0].style.color = textcolor;
  };

  function setDefaultBackground() {
    document.body.style.background = `url('websitefiles/generic.png')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    document.getElementsByTagName('H1')[0].style.color = 'lightyellow';
  };

  useEffect(() => {
    let ignore = false;
    
    if (!ignore) setDefaultBackground()
    return () => { ignore = true; }
    },[]);
    
  return (
    <div className="app">
      <div class="dropdown" tabindex="1">
        <i class="db2" tabindex="1"></i>
        <a class="dropbtn">Page Theme</a>
        <div class="dropdown-content">
          <a href="#" onClick={() => setBackground("generic", "lightyellow")}>
            Generic
          </a>
          <a href="#" onClick={() => setBackground("busystreet", "white")}>
            Busy Street
          </a>
          <a href="#" onClick={() => setBackground("cablecar", "lightyellow")}>
            Ski Season
          </a>
          <a href="#" onClick={() => setBackground("cherrysunset", "white")}>
            Cherry Sunset
          </a>
          <a href="#" onClick={() => setBackground("galaxy", "lightcyan")}>
            Galaxy
          </a>
          <a href="#" onClick={() => setBackground("japanpark", "lightyellow")}>
            Osaka Park
          </a>
          <a href="#" onClick={() => setBackground("junctiondark", "white")}>
            Hong Kong Junction
          </a>
          <a href="#" onClick={() => setBackground("mountains", "lightcyan")}>
            Mountain Sunrise
          </a>
          <a href="#" onClick={() => setBackground("nightcity", "lightyellow")}>
            Late Night City
          </a>
          <a href="#" onClick={() => setBackground("parisrain", "lightgreen")}>
            Paris Rain
          </a>
          <a href="#" onClick={() => setBackground("tokyostreet", "slateblue")}>
            Tokyo Commute
          </a>
        </div>
      </div>
      <a className="sectionbtn" onClick={handleAddSection}>Add Section</a>
      <h1>My Trip Itinerary</h1>
      <h2>Loading...</h2>
      <div className="section-container">
        {itinerary.map((section) => (
          <ItinerarySection
            key={section.id}
            section={section}
            onUpdate={handleSectionUpdate}
            onDelete={handleSectionDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
