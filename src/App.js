import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/"></Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
