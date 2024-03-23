import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Login from './components/pages/login/Login'; // Import the Login component

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/pages/home/Home';



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/">
//           <Header />
//         </Route>
//         {/* Uncomment the following Route for the Login component */}
//         <Route path="/login">{<Login />}</Route>
    
//         {/* Add other routes as needed */}
//       </Switch>
//     </Router>
//   );
// }

export default App;
