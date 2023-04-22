import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../context/GlobalContext'

function History() {

    const { transactionHistory } = useGlobalContext();

    const [...history] = transactionHistory()

  return (
      <HistoryStyle>
          <h2>Recent History</h2>
          {history.map((item) => {
              const { _id, title, amount, type } = item;
              return (
                <div key={_id} className="history-item">
                  <p style={{ color: type === "Income" ? "green" : "red" }}>
                    {title}
                  </p>
                  <p style={{ color: type === "Income" ? "green" : "red" }}>
                          {
                              type==='Income' ? `+${amount}` : `-${amount}`
                    }
                  </p>
                </div>
              );
          })}
    </HistoryStyle>
  )
}

const HistoryStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #fcf6f9;
        border: 2px solid white;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.5);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History