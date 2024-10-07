import React from 'react'
import { checkGuess } from '../../game-helpers'

function Guess({ answer, guess }) {
  const lettersArr = guess
    ? checkGuess(guess, answer)
    : Array(5).fill({ letter: '', status: '' })

  return (
    <p className="guess">
      {lettersArr.map(({ letter, status }, i) => (
        <span className={`cell ${status}`} key={i}>
          {letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
