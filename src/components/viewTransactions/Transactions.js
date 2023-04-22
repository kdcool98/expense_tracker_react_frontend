import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import { InnerLayout } from "../../styles/Layouts";
import TransactionItem from "./TransactionItem";

function Transactions() {
  const { getIncomes, incomes, deleteIncome, totalIncome, totalExpense, expenses } = useGlobalContext();

//   // Call to getIncomes when initial render
//   useEffect(() => {
//     getIncomes();
//   }, []); // To render when incomes changes.

    console.log(incomes);
    console.log(expenses);
    const txnHistory = [...incomes, ...expenses];
    txnHistory.sort((a, b) => { return new Date(a.createdAt) - new Date(b.createdAt); });
    console.log("Transaction History : %s", txnHistory);
  return (
    <TransactionsStyle>
      <InnerLayout>
        <h1>Transactions</h1>
        <h2 className="total-income">
          Total Balance : <span>${totalIncome-totalExpense}</span>
        </h2>
        <div className="income-content">
          <div className="incomes">
            {txnHistory.map((txn) => {
                return (
                    <TransactionItem key={ txn._id}  txn={txn}/>
                
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </TransactionsStyle>
  );
}

const TransactionsStyle = styled.div`
  display: flex;
  overflow: auto;
  .income-content {
    display: flex;
    gap: 2rem;
    margin-top: 30px;
    .incomes {
      flex: 1;
    }
  }

  .total-income {
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
      color: var(--color-green);
    }
  }
`;

export default Transactions;
