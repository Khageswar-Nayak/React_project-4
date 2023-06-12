import React, { useState } from "react";
import AddButtom from "./AddButtom";

function Form() {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredCatagory, setEnteredCatagory] = useState("Food");

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const catagoryChangeHandler = (event) => {
    setEnteredCatagory(event.target.value);
  };

  const addProduct = (event) => {
    event.preventDefault();

    const productData = {
      id: enteredId,
      amount: enteredPrice,
      name: enteredName,
      catagory: enteredCatagory,
    };
    // props.onSaveExpenseData(productData);

    setEnteredId("");
    setEnteredPrice("");
    setEnteredName("");
    setEnteredCatagory("");
  };

  return (
    <div>
      <form onSubmit={addProduct}>
        <label>Product ID :</label>
        <input type="number" onChange={idChangeHandler} />
        <br />
        <label>Selling Price :</label>
        <input type="number" onChange={priceChangeHandler} />
        <br />
        <label>Product Name :</label>
        <input type="text" onChange={nameChangeHandler} />
        <br />
        <label>Choose a Catagory :</label>
        <select onChange={catagoryChangeHandler}>
          <option>Food</option>
          <option>Electronics</option>
          <option>Skincare</option>
        </select>

        <AddButtom />
      </form>
    </div>
  );
}

export default Form;
