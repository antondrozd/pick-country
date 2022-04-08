import { useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { getRandomCountry } from "./utils"

// const MAX_COUNTRIES = 8;

function App() {
  const [isSpinning, setIsSpinning] = useState(true)
  // const [countries, setCountries] = useState<string[] | null>(null);
  const [finalCountry, setFinalCountry] = useState<string | null>(null)

  const handleClick = () => {
    // const generatedCountries: string[] = [];

    // for (let i = 0; i < MAX_COUNTRIES; i++) {
    //   const generatedCountry: string = getRandomCountry({ full: true });

    //   generatedCountries.push(generatedCountry);
    // }

    const generatedCountry: string = getRandomCountry()

    setFinalCountry(generatedCountry)
    // setCountries(generatedCountries);
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
          <Country>{finalCountry}</Country>
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
  from { left: -600px; } to { left: 600px; }
`

const moveY = keyframes`
  from { top: -200px; } to { top: 200px; }
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

const Country = styled.span`
  font-family: "Rubik Bubbles", cursive;
  font-size: 36px;
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
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 300px;
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
