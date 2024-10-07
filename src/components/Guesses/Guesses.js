import React from 'react'
import Guess from '../Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guesses({ answer, guesses }) {
  const guessesAllowed = [...Array(NUM_OF_GUESSES_ALLOWED).keys()]

  return (
    <div className="guess-results">
      {guessesAllowed?.map((num) => (
        <Guess answer={answer} guess={guesses[num]} key={num} />
      ))}
    </div>
  )
}

export default Guesses
