import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/DateFormat';
import { bitcoin, book, calender, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../button/Button';

function IncomeItem({
    id, title, amount, date, category, description, type, deleteItem, indicatorColor
}) {

    const categoryIcon = () => { 
        switch (category) {
            case 'Salary':
                return money;
            case 'Freelancing':
                return freelance;
            case 'Investments':
                return users;
            case 'Trading':
                return stocks;
            case 'Bitcoin':
                return bitcoin;
            case 'Youtube':
                return yt;
            case 'Other':
                return piggy;
            default:
                return '';
        }
    }


    const expenseCatIcon = () => { 
        switch (category) {
          case "Education":
            return book;
          case "Groceries":
            return food;
          case "Health":
            return medical; 
          case "Subscriptions":
            return tv;
          case "Takeaways":
            return takeaway;
          case "Clothing":
            return clothing;
          case "Travelling":
                return freelance;
            case "Other":
                return circle;
            default:
                return '';
        }
    }

  return (
    <IncomeItemStyle indicator={indicatorColor}>
      <div className="icon">
        {type === "Expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {dollar} {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              btnPadding={"1rem"}
              btnRadius={"50%"}
              bg={"var(--primary-color)"}
              color={"#fff"}
              onClick={() => {console.log(id+"++++++++++++++++++++=") ; deleteItem(id); }}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyle>
  );
}

const IncomeItemStyle = styled.div`
  background: #fcf6f9;
  border: 2px solid white;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    i{
        font-size: 2.6rem;
    }
  }

  .content{
    flex: 1;
    display: flex;
    flex-direction:column;
    gap: 0.2rem;
    h5{
        padding-left: 2rem;
        font-size: 1.3rem;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            background: ${props => props.indicator};
        }
    }

    .inner-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            display: flex;
            align-items: center;
            gap: 1.5rem;
            p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--primary-color);
                opacity: 0.8; 
            }
        }
    }
  }


`;

export default IncomeItem