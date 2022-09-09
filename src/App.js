import './App.css';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js"; 
import Header from './components/Header/header';
import Home from './Page/home';
import About_page from './Page/abt';
import Academics from './Page/academic';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
            <Route path ="/" element ={<Home/>} />
            <Route path ="/abt" element ={<About_page/>} />
            <Route path ="/academics" element ={<Academics/>} />
          </Routes>     
          <Footer/>
      </Router>   
    </div>
  );
}

export default App;
