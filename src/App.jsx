/*import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Contact/Contact";



const App = () => {
  let heroData = [
    { text1: "Dive Into", text2: "What you Love" },
    { text1: "Indulge", text2: "Your Passsion" },
    { text1: "Give Into", text2: "What you Love" },
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 30000);
  }, [])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Blogs />
      <Contact />
      <Footer />
      

    </div >
  )
}

export default App */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Blogs from "./Components/Blogs/Blogs";
import Contact from './pages/Contact/Contact';
import Contact from "./Contact/Contact";

// Placeholder components (replace with actual pages if they exist)
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;