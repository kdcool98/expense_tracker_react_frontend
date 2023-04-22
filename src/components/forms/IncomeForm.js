import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../../context/GlobalContext'
import Button from '../button/Button'
import { plus } from '../../utils/Icons'

function Form() {

    const { addIncome, error, setError } = useGlobalContext();

    const [inputState, setInputState] = useState({
        title: '',
        description: '',
        date: '',
        type: '',
        category: '',
        amount: ''
    });

    const { title, description, date, type, category, amount } = inputState;

    const handleInput = field => event => {
      setInputState({ ...inputState, [field]: event.target.value });
      setError('');
    }

    const handleSubmit = event => { 
        event.preventDefault();
      addIncome(inputState);
      setInputState({
        title: "",
        description: "",
        date: "",
        type: "",
        category: "",
        amount: "",
      });
    }

  return (
    <FormStyle onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Income Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          value={amount}
          name={"amount"}
          placeholder="Income amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Date of Income"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Salary">Salary</option>
          <option value="Freelancing">Freelancing</option>
          <option value="Investments">Investments</option>
          <option value="Trading">Trading</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Youtube">YouTube</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          id="description"
          cols="30"
          rows="4"
          placeholder="Enter a description"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      <div className="selects input-control">
        <select
          required
          value={type}
          name="type"
          id="type"
          onChange={handleInput("type")}
        >
          <option disabled value="">
            Select Type
          </option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          btnPadding={"0.8rem 1.6rem"}
          btnRadius={"30px"}
          bg={"var(--color-accent)"}
          color={"#fff"}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid white;
    resize: none;
    background: transparent;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn{
    button{
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
      &:hover{
        background: var(--color-green) !important;
      }
    }
  }
`;

export default Form