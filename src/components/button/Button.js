import React from "react";
import styled from "styled-components";

function Button({name, icon, onClick, bg, btnPadding, color, btnRadius}) {
  return (
      <ButtonStyle style={{
          background: bg,
          padding: btnPadding,
          borderRadius: btnRadius,
          color: color
      }} onClick={onClick}>
          {icon}
          {name}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;

export default Button;
