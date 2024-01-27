import { useState, useEffect } from "react";
import About from "./Components/About";
// import Admin from "./Components/Admin";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const ThemeStored = () => {
  const storedTheme = localStorage.getItem('Theme');
  return storedTheme ? JSON.parse(storedTheme) : 'dark-theme';
};

function App() {

  // eslint-disable-next-line
  const [Theme, setTheme] = useState(ThemeStored);
  useEffect(() => {
    localStorage.setItem('Theme', JSON.stringify(Theme))
  }, [Theme]);

  return (
    <div className={`App ${Theme}`}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Admin" element={<Admin/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
