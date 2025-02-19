import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./Header";
import Routing from "./Routing";
import Foter from "./Foter";
import "./App.css";
import ScrollToTop from "./Scrooltotop";



function App() {
  return (
     
     
  
      <div className="APP">
        <ScrollToTop />
        <Header/>
      
        <Routing />
        <Foter />
      </div>
  
  );
}

export default App;
