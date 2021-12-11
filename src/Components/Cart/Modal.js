import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const closeCartHandler = () => {
    props.closeCart();
  };

  return <div onClick={closeCartHandler} className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return <div className="modalOverlay">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeCart={props.closeCart} />,
        document.getElementById("overlayer")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        document.getElementById("overlayer")
      )}
    </React.Fragment>
  );
};

export default Modal;
