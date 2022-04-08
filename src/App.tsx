import { useState } from "react"
import styled, { keyframes, css } from "styled-components"

import { getRandomCountry } from "./utils"

const BUTTON_WIDTH = 300
// const MAX_COUNTRIES = 8;

function App() {
  const [isSpinning, setIsSpinning] = useState(true)
  const [finalCountry, setFinalCountry] = useState<string | null>(null)

  const handleClick = () => {
    const generatedCountry: string = getRandomCountry()

    setFinalCountry(generatedCountry)
    setIsSpinning(false)
  }

  return (
    <PageWrapper>
      {/* <Wrapper> */}
      <Button isSpinning={isSpinning} onClick={handleClick}>
        {isSpinning ? "Страну мне!" : "🔥🔥🔥"}
      </Button>
      {/* {countries &&
          countries.map((country, index) => (
            <Country key={index}>{country}</Country>
          ))} */}
      {/* </Wrapper> */}
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
            {finalCountry}
          </Country>
        </CountryWrapper>
      )}
    </PageWrapper>
  )
}

export default App

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg) ;
}`

const zlataEffect = keyframes`
  30% {
    transform: scale(0.1);
  }

  60% {
    transform: scale(5);
  }

  100% {
    transform: none;
  }
`

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Country = styled.a`
  font-family: "Rubik Bubbles", cursive;
  font-size: 36px;
  text-decoration: none;
  color: #000;
`

const Zlata = styled.img`
  width: 250px;
  margin: 40px 0;
  border-radius: 50%;
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
  font-size: 21px;
  background-color: #b846ef;
  color: #feeef8;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;

  ${(props) =>
    props.isSpinning
      ? css`
          animation: ${spin} linear 2s infinite,
            ${moveX} 2s linear 0s infinite alternate,
            ${moveY} 3.4s linear 0s infinite alternate;
        `
      : css`
          animation: ${zlataEffect} linear 1s;
        `}
`
