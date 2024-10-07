import React from 'react'
import Guess from '../Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guesses({ guesses }) {
  const guessesAllowed = [...Array(NUM_OF_GUESSES_ALLOWED).keys()]

  return (
    <div class="guess-results">
      {guessesAllowed?.map((num) => (
        <Guess guess={guesses[num]} key={num} />
      ))}
    </div>
  )
}

export default Guesses
