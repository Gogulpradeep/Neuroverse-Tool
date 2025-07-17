import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import  Homepage from "./Homepage";
import  Tools from "./Tools";
import Contact from "./Contact";
import Login from  "./Login";
import Aboutus from "./Aboutus";
import Summarizer from './Textsumm'
import Grammar from "./Grammar";
import Paraphraser from "./Paraphraser";
import Word from "./Word";
import Readtime from "./Readtime";
import Texttone from "./Texttone";


function App() {

  return (
    <Router>
      <Navbar />

    
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/summarizer" element={<Summarizer/>}/>
          <Route path="/tools/grammar" element={<Grammar/>}/>
             <Route path="/tools/paraphraser" element={<Paraphraser/>}/>
             <Route path="/tools/counter" element={<Word/>}/>
             <Route path="/tools/read-time" element={<Readtime/>}/>
             <Route path="/tools/tone" element={<Texttone/>}/>

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </Router>
  );
}

export default App;
