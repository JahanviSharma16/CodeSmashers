import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Header/>
      {/* <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/register">  </Route>
          <Route path="/login">{<Login />}</Route>
          <Route path="/write">{<Write /> } </Route>
          <Route path="/settings">{<Settings />}</Route>
          <Route path="/post/:postId">
  
          </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
