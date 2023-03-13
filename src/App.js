import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 5, 28),
  },
  { id: "e3", title: "New TV", amount: 294.67, date: new Date(2021, 7, 28) },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 294.67,
    date: new Date(2021, 8, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }
    );
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
