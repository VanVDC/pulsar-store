import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

import "./header.styles.scss";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>

    {hidden ? null : <CartDropDown />}
  </div>
);

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
