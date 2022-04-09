import { useState } from "react"
import styled, { keyframes, css } from "styled-components"

import { getRandomCountry } from "../utils"
import { spin, spinReverse, zlataEffect } from "../animations"
import Fireworks from "./Fireworks"

const BUTTON_WIDTH = 300

function App() {
  const [isCountryPicked, setIsCountryPicked] = useState(false)
  const [finalCountry, setFinalCountry] = useState<string | null>(null)

  const handleClick = () => {
    if (!isCountryPicked) {
      const generatedCountry: string = getRandomCountry()

      setFinalCountry(generatedCountry)
      setIsCountryPicked(true)
    } else {
      setFinalCountry(null)
      setIsCountryPicked(false)
    }
  }

  return (
    <PageWrapper>
      <Button isSpinning={!isCountryPicked} onClick={handleClick}>
        {!isCountryPicked ? "Страну мне!" : "Phew... Again please!"}
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
      <Fireworks isEnabled={isCountryPicked} />
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
          animation: ${spinReverse} linear 0.2s 3;

          :hover {
            transform: scale(1.1);
          }
        `}
`
