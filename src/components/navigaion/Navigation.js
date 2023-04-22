import React from 'react'
import styled from 'styled-components'
import avatar from "../../images/avatar.png"
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/MenuItems';

function Navigation({active, setActive}) {
  return (
    <NavStyle>
          <div className="user-con">
              <img src={avatar} alt="" />
              <div className="text">
                  <h2>Keshav</h2>
                <p>Your Money</p>
              </div>
          </div>    
          <ul className="menu-items">
              {menuItems.map(item => { 
                  return (
                    <li
                      key={item.id}
                      onClick={() => {
                        setActive(item.id);
                          }}
                          className={active===item.id ? 'active' : ''}
                    >
                      {item.icons} <span>{item.title}</span>
                    </li>
                  );
              })}
          </ul>
          <div className="bottom-nav">
              <li>
                  {signout} Sign Out
              </li>
          </div>
    </NavStyle>
  )
}

const NavStyle = styled.div`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(256, 246, 249, 0.78);
  border: 3px solid white;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid white;
      padding: 0.2rem;
      box-shadow: 0 1px 17px regba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      padding-left: 1rem;
      position: relative;
      color: rgba(34, 34, 34, 0.6);
      i {
        transition: all 0.4s ease-in-out;
        color: rgba(34, 34, 34, 0.6);
        font-size: 1.4rem;
      }
    }
  }

  .active {
    color: rgba(34,34,34,1) !important;
    i{
        color: rgba(34,34,34,1);
    }
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height:100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation