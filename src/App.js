import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   // createUserProfileDocument(user);
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       this.props.setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //       // console.log(this.state);
    //     });
    //   } else {
    //     this.props.setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  unSubscribeFromAuth = null;

  render() {
    return (
      <div>
        {/* <Router> */}
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        {/* </Router> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
