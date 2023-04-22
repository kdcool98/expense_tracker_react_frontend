import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../chart/Chart';
import History from '../history/History';

function Dashboard() {

  const { incomes, expenses, totalExpense, totalIncome, getIncomes, getExpenses, transactionHistory } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyle>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-container">
          <div className="chart-container">
            <Chart />
            <div className="amount-container">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpense}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p style={{color: totalIncome-totalExpense>0 ? 'green' : 'red'}}>
                  {dollar} {totalIncome - totalExpense}
                </p>
              </div>
            </div>
          </div>
          <div className="history-container">
            <History />
            <h2 className="salary-title">
              Min<span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>{Math.min(...incomes.map((item) => item.amount))>=0 ? Math.min(...incomes.map((item) => item.amount)) : 0}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))>=0 ? Math.max(...incomes.map((item) => item.amount)) : 0}</p>
            </div>
            <h2 className="salary-title">
              Min<span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>{Math.min(...expenses.map((item) => item.amount))>=0 ? Math.min(...expenses.map((item) => item.amount)) : 0}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))>=0 ? Math.max(...expenses.map((item) => item.amount)) : 0}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyle>
  );
}

const DashboardStyle = styled.div`
  .stats-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-container {
      grid-column: 1 / 4;
      height: 400px;
      .amount-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3.5rem;
            font-weight: 700;
          }
        }
        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 4.5rem;
          }
        }
      }
    }
    .history-container {
      grid-column: 4/-1;
      h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid white;
        box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard