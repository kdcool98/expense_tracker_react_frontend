import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../forms/IncomeForm';
import IncomeItem from './IncomeItem';

function Incomes() {

    const { getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();
    
    // Call to getIncomes when initial render
    useEffect(() => {
        getIncomes();
    },[]) // To render when incomes changes.

  return (
      <IncomesStyle>
          <InnerLayout>
              <h1>Incomes</h1>
              <h2 className="total-income">Total Income : <span>${ totalIncome}</span></h2>
              <div className="income-content">
                  <div className="form-container">
                      <Form />
                  </div>
                  <div className="incomes">
                      {incomes.map((income) => {
                          return <IncomeItem id={income._id}
                              key={income._id}
                              title={income.title}
                              date={income.date}
                              description={income.description}
                              category={income.category}
                              amount={income.amount}
                              type={income.type}
                              indicatorColor="var(--color-green)"
                              deleteItem={deleteIncome}
                          />
                      })} 
                        
                     
                  </div>
              </div>
          </InnerLayout>
    </IncomesStyle>
  )
}

const IncomesStyle = styled.div`
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
    span{
        font-size:2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
  }
`;

export default Incomes