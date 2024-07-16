import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Service from "./Components/Services";


import './Sass/App.scss'
import './Sass/header.scss'
import './Sass/Home.scss'
import './Sass/Footer.scss'
import './Sass/Contact.scss'
import './Sass/mediaquery.scss'

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Service/>} />
    </Routes>
      <Footer />
   </Router>
  );
}

export default App;
