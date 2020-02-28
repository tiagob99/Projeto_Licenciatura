import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Header from "./component/HeaderComponent/header";
import Footer from "./component/FooterComponent/footer";
import Homepage from "./component/pages/homepage";
import Watchpage from "./component/pages/watchpage";
import Login from "./component/pages/login";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/watchpage" component={Watchpage} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
}
