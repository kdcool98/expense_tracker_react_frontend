import axios from 'axios';
import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

const BASE_URL = "http://localhost:8181/api/v1/";

export const GlobalContextProvider = ({ children }) => { 

    const [incomes, setIncomes] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);
    const [error, setError] = useState(null);

    // INCOMES

    const addIncome = async (income) => { 
        await axios.post(`${BASE_URL}add-income`, income).catch((err) => { 
            setError(err);
        })
        getIncomes();
    }

    const getIncomes = async () => { 
        console.log("getIncomes calling");
        const response = await axios.get(`${BASE_URL}get-incomes`);
        let total = 0;
        response.data.forEach((income) => { total = total + income.amount });
        setTotalIncome(total);
        setIncomes(response.data);
    }

    const deleteIncome = async (id) => { 
        await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes();
    }

    // EXPENSES

    const addExpense = async(expense) => { 
        await axios.post(`${BASE_URL}add-expense`, expense).catch((err) =>
            setError(err));
        getExpenses();
    }

    const getExpenses = async () => { 
        console.log("getExpenses calling");
        const response = await axios.get(`${BASE_URL}get-expenses`);
        let total = 0;
        response.data.forEach((expense) => { total = total + expense.amount });
        setTotalExpense(total);
        setExpenses(response.data);
    }

    const deleteExpense = async (id) => { 
        await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getExpenses();
    }

    const transactionHistory = () => { 
        const hist = [...incomes, ...expenses];
        hist.sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt); 
        })
        return hist.slice(0,3);
    }

    return (
      <GlobalContext.Provider
        value={{
          addIncome,
          getIncomes,
          deleteIncome,
          incomes,
          totalIncome,
          addExpense,
          getExpenses,
          deleteExpense,
          expenses,
          totalExpense,
                transactionHistory,
                error,
          setError
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => { 
    return useContext(GlobalContext);
}