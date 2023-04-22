import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/UseWindowSize';

function Orb() {

    const { width, height } = useWindowSize()
    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width/1.8}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `;

    const OrbStyle = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-top: -37vh;
        margin-left: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(100px);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;

  return (
    <OrbStyle></OrbStyle>
  )
}

export default Orb