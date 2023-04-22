import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import styled from 'styled-components';
import { dateFormat } from '../../utils/DateFormat';
import { useGlobalContext } from '../../context/GlobalContext';

ChartJs.register(
    CategoryScale,
    LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {

    const { incomes, expenses } = useGlobalContext();
 
    // console.log(expenses);
    const data = {
      labels: expenses.map((expense) => {
        return dateFormat(expense.date);
      }),
      datasets: [
        {
          label: "Income",
          data: [
            ...incomes.map((income) => {
              return income.amount;
            }),
          ],
          backgroundColor: "green",
          tension: 0.2, // For the curve in the line chart
        },
        {
          label: "Expenses",
          data: [
            ...expenses.map((expense) => {
              return expense.amount;
            }),
          ],
          backgroundColor: "red",
          tension: 0.2, // For the curve in the line chart
        },
      ],
    };

  return (
      <ChartStyle>
          <Line data={data}/>
    </ChartStyle>
  )
}

const ChartStyle = styled.div`
    background: #fcf6f9;
    border: 2px solid white;
    box-shadow: 0 1px 15px rgba(0,0,0,0.5);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart