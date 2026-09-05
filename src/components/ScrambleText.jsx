import { useEffect, useRef, useState } from 'react'

const CHARS = '01'
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)]

export default function ScrambleText({
  text,
  className = '',
  startDelay = 300,
  revealStep = 90,
  scrambleTick = 45,
  loop = false,
  pauseDuration = 3000,
}) {
  const [display, setDisplay] = useState(() => text.replace(/\S/g, randomChar))
  const revealedRef = useRef(0)

  useEffect(() => {
    let scrambleId
    let revealId
    let timeoutId

    const render = () => {
      const revealed = revealedRef.current
      setDisplay(
        text
          .split('')
          .map((ch, i) => (i < revealed || ch === ' ' ? ch : randomChar()))
          .join(''),
      )
    }

    const runCycle = () => {
      revealedRef.current = 0
      scrambleId = setInterval(render, scrambleTick)
      revealId = setInterval(() => {
        revealedRef.current += 1
        if (revealedRef.current >= text.length) {
          clearInterval(revealId)
          clearInterval(scrambleId)
          render()
          if (loop) {
            timeoutId = setTimeout(runCycle, pauseDuration)
          }
        }
      }, revealStep)
    }

    timeoutId = setTimeout(runCycle, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(scrambleId)
      clearInterval(revealId)
    }
  }, [text, startDelay, revealStep, scrambleTick, loop, pauseDuration])

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  )
}
