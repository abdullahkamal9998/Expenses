import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  const titleOnChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({ ...userInput, title: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const amountOnChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({ ...userInput, amount: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };
  const dateOnChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({ ...userInput, date: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
      id: Math.random(),
    };
    // console.log(expenseData);
    props.onSaveExpenseDate(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={titleOnChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountOnChangeHandler}
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateOnChangeHandler}
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
