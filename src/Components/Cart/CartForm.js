import React, { useState } from "react";
import useFormValidation from "../../Hooks/use-formValidation";
import useHttp from "../../Hooks/use-http";

const CartForm = (props) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useFormValidation((name) => name.trim() !== "");

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useFormValidation((email) => email.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const { sendRequest: postMeals } = useHttp();

  const submitHandler = (event) => {
    event.preventDefault();

    props.items[0].user = nameValue;
    props.items[0].email = emailValue;

    const postData = props.items;

    postMeals({
      url: "https://orderfoodapp-be86f-default-rtdb.europe-west1.firebasedatabase.app/postdata.json",
      method: "POST",
      body: { text: postData },
      headers: {
        "Content-Type": "application/json",
      },
    });
    setShowThankYou(true);
  };

  return (
    <>
      {!showThankYou && (
        <form onSubmit={submitHandler}>
          <header>
            To complete your order, please inform your name and your e-mail.
          </header>
          <label htmlFor="name">Name</label>
          <input
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            value={nameValue}
            id="name"
            type="text"
          ></input>
          {nameHasError && (
            <p>Sorry, but you must insert at least your fisrt name.</p>
          )}
          <label htmlFor="email">E-Mail</label>
          <input
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={emailValue}
            id="email"
            type="text"
          ></input>
          {emailHasError && <p>Sorry, but it must be a valid email.</p>}
          <h3>Your total is ${props.totalPrice}</h3>
          <button type="submit" disabled={!formIsValid}>
            Order
          </button>
        </form>
      )}
      {showThankYou && (
        <h1>
          Thank you for shopping with us. We have received your order, and will
          start working on it right away.
        </h1>
      )}
    </>
  );
};

export default CartForm;
