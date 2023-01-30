import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";
import About from "./Pages/About"

import {Routes, Route} from "react-router-dom";


function App(){
  return (
    <>
      <NavBar />
      <div className="container">
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </div>
    </>
  )
}

export default App;




// using anchor tag

// function App() {
//   let component;
//   switch (window.location.pathname) {
//     case "/":
//       component = <Home />;
//       break;
//     case "/pricing":
//       component= <Pricing />
//       break
//     case "/About":
//       component= <About />;
//       break;
    
//       default:
//         component = <Home />
//         break;
//   }
//   return (
//     <>
//     <NavBar />
//     {component}
//     </>
//   );
// }
