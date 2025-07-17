import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Homepage from "./Homepage.jsx";
import Navbar from './Navbar.jsx';
import Footer  from "./Footer.jsx";
import Tools from "./Tools.jsx";
import Video from "./Video.jsx";
import  Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import Textsumm from "./Textsumm.jsx";
import  Grammar from "./Grammar.jsx";
import  Word from "./Word.jsx";
import Readtime from "./Readtime.jsx";
import Paraphraser from "./Paraphraser.jsx";
import  Texttone from "./Texttone.jsx";
import App from './App.jsx';
import Aboutus from './Aboutus.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App/>

    
  </StrictMode>,
)
