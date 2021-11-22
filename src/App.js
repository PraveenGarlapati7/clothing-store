import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  // console.log(props);
  return (
    <div>
      {/* <Router> */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
      {/* </Router> */}
    </div>
  );
}

export default App;
