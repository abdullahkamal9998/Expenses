import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
