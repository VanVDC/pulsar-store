import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { selectCurrentUser } from "../src/redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import Spinner from "./components/spinner/spinner.component";
import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { GlobalStyle } from "./global.styles";

const HomePage = lazy(() => import("./pages/homepage/homepage.page"));
const ShopPage = lazy(() => import("./pages/shop/shop.page"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-signup.component")
);

class App extends React.Component {
  // unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
