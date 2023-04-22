import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../forms/ExpenseForm";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
  const { getExpenses, expenses, deleteExpense, totalExpense } =
    useGlobalContext();

  // Call to getExpenses when initial render
  useEffect(() => {
    getExpenses();
  }, []); // To render when expenses changes.

  return (
    <ExpensesStyle>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-expense">
          Total Expense : <span>${totalExpense}</span>
        </h2>
        <div className="expense-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              return (
                <ExpenseItem
                  id={expense._id}
                  key={expense._id}
                  title={expense.title}
                  date={expense.date}
                  description={expense.description}
                  category={expense.category}
                  amount={expense.amount}
                  type={expense.type}
                  indicatorColor="#ff0e00"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyle>
  );
}

const ExpensesStyle = styled.div`
  display: flex;
  overflow: auto;
  .expense-content {
    display: flex;
    gap: 2rem;
    margin-top: 30px;
    .expenses {
      flex: 1;
    }
  }

  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: solid 2px #fff;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: #ff0e00;
    }
  }
`;

export default Expenses;
