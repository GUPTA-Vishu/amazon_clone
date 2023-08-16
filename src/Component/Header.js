import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const [{basket}]=useStateValue();
  console.log(basket);
  
  
  return (
    <div className="header">
      <Link to="/">
      <div className="header_logo">
    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> 
      </div>

      </Link>
    

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">hello Guest</span>
          <span className="header__optionLine2">Sign In </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLine2"> & Orders </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLine2">Prime </span>
        </div>
        <Link to="/checkout">
        <div className="option_basket">
          <AddShoppingCartIcon/>
          <span className="header_optionLine2  header_basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
