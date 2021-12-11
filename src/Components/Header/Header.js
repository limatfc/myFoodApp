import React from "react";
import "./Header.css";
import meals from "./meals.jpeg";
import HeaderButton from "../Button/HeaderButton";
import Summary from "./Summary";

const Header = (props) => {
  const onClickHandler = (click) => {
    props.onOpenCart(click);
  };

  return (
    <React.Fragment>
      <header className="main-header">
        <h1>The Best Food In The World</h1>
        <HeaderButton onClickHandler={onClickHandler} />
      </header>
      <div className="image-summary container">
        <img src={meals} alt="Plates with meals" />
        <Summary />
      </div>
    </React.Fragment>
  );
};

export default Header;
