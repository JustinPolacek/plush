import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from '../src/components/Nav'
import ModalVideo from "./components/ModalVideo";
import {AnimatePresence} from "framer-motion";


function App() {
  return (
    <div className="App">
  
  

      <Nav />
       <GlobalStyle />
       <AboutUs />
       <ModalVideo />

    
    </div>
  );
}

export default App;
