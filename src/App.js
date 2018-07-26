import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Saved from "./components/Saved";
// import Home from "./components/Home";
// import Article from "./components/article";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <Navbar />

//       <Home />

//       <Footer />
//       </div>
//     );
//   }
// }

// export default App;

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
