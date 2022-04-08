import { useState } from "react"
import styled, { keyframes, css } from "styled-components"

import { getRandomCountry } from "../utils"
import { spin, zlataEffect } from "../animations"

const BUTTON_WIDTH = 300
// const MAX_COUNTRIES = 8;

function App() {
  const [isSpinning, setIsSpinning] = useState(true)
  const [finalCountry, setFinalCountry] = useState<string | null>(null)

  const handleClick = () => {
    if (isSpinning) {
      const generatedCountry: string = getRandomCountry()

      setFinalCountry(generatedCountry)
      setIsSpinning(false)
    } else {
      setFinalCountry(null)
      setIsSpinning(true)
    }
  }

  return (
    <PageWrapper>
      <Button isSpinning={isSpinning} onClick={handleClick}>
        {isSpinning ? "Страну мне!" : "Phew... Again please!"}
      </Button>
      {finalCountry && (
        <CountryWrapper>
          <Zlata src="./zlata.webp" alt="zlata wow" />
          <Country
            target="_blank"
            href={`https://www.google.com.ua/maps/search/${finalCountry.replaceAll(
              " ",
              "+"
            )}`}
          >
            🔥{finalCountry}🔥
          </Country>
        </CountryWrapper>
      )}
    </PageWrapper>
  )
}

export default App

const moveX = keyframes`
  from { left: calc(-50vw + ${BUTTON_WIDTH / 2}px); } to { left: calc(50vw - ${
  BUTTON_WIDTH / 2
}px); }
`

const moveY = keyframes`
  from { top: calc(-50vh + ${BUTTON_WIDTH / 2}px); } to { top: calc(50vh - ${
  BUTTON_WIDTH / 2
}px); }
`

const PageWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("./bg.jpeg") no-repeat center;
    background-size: cover;
    opacity: 0.2;
    z-index: -1;
  }
`

const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Country = styled.a`
  position: relative;
  font-family: "Rubik Bubbles", cursive;
  font-size: 46px;
  text-align: center;
  text-decoration: none;
  color: #000;
  animation: ${zlataEffect} linear 1s;

  ::after {
    content: "☝ \n click me!";
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    font-size: 14px;
    text-align: center;
  }

  :hover {
    text-decoration: underline;
  }
`

const Zlata = styled.img`
  width: 250px;
  margin: 40px 0;
  border-radius: 50%;
  user-select: none;
  animation: ${spin} linear 0.5s;

  :hover {
    animation: ${spin} linear 0.5s infinite;
  }
`

// const Wrapper = styled.div`
//   position: relative;
//   /* width: 500px; */
//   /* height: 500px; */

//   ${Country} {
//     display: block;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 6em;
//     height: 6em;
//     margin: -3em;
//     text-align: center;
//   }

//   > ${Country}:nth-of-type(1) {
//     transform: rotate(0deg) translate(10em) rotate(0deg);
//   }
//   > ${Country}:nth-of-type(2) {
//     transform: rotate(45deg) translate(10em) rotate(-45deg);
//   }
//   > ${Country}:nth-of-type(3) {
//     transform: rotate(90deg) translate(10em) rotate(-90deg);
//   }
//   > ${Country}:nth-of-type(4) {
//     transform: rotate(135deg) translate(10em) rotate(-135deg);
//   }
//   > ${Country}:nth-of-type(5) {
//     transform: rotate(180deg) translate(10em) rotate(-180deg);
//   }
//   > ${Country}:nth-of-type(6) {
//     transform: rotate(225deg) translate(10em) rotate(-225deg);
//   }
//   > ${Country}:nth-of-type(7) {
//     transform: rotate(270deg) translate(10em) rotate(-270deg);
//   }
//   > ${Country}:nth-of-type(8) {
//     transform: rotate(315deg) translate(10em) rotate(-315deg);
//   }
// `;

const Button = styled.button<{ isSpinning: boolean }>`
  position: relative;
  width: ${BUTTON_WIDTH}px;
  padding: 20px;
  font-family: "Shadows Into Light", cursive;
  font-weight: 600;
  font-size: 21px;
  color: #feeef8;
  background-color: #b846ef;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;

  ${(props) =>
    props.isSpinning
      ? css`
          animation: ${spin} linear 2s infinite,
            ${moveX} 2s linear 0s infinite alternate,
            ${moveY} 3.5s linear 0s infinite alternate;
        `
      : css`
          animation: ${zlataEffect} linear 1s;

          :hover {
            transform: scale(1.1);
          }
        `}
`
