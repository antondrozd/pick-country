import { keyframes } from "styled-components"

export const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg) ;
}`

export const zlataEffect = keyframes`
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
