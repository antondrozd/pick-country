import { CSSProperties } from "react"
import {
  Fireworks as LibFireworks,
  useFireworks,
} from "fireworks-js/dist/react"

interface IProps {
  isEnabled: boolean
}

const Fireworks = ({ isEnabled }: IProps) => {
  const { options } = useFireworks({
    // initialStart: isEnabled,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      // sound: {
      //   enabled: false,
      //   files: [
      //     "https://fireworks.js.org/sounds/explosion0.mp3",
      //     "https://fireworks.js.org/sounds/explosion1.mp3",
      //     "https://fireworks.js.org/sounds/explosion2.mp3",
      //   ],
      //   volume: {
      //     min: 1,
      //     max: 2,
      //   },
      // },
      // mouse: {
      //   click: true,
      //   move: false,
      //   max: 1,
      // },
    },
  })

  const style: CSSProperties = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: -1,
  }

  return <LibFireworks style={style} enabled={isEnabled} options={options} />
}

export default Fireworks
