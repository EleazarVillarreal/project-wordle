import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import Guesses from '../Guesses/Guesses'
import Banner from '../Banner/Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const [status, setStatus] = useState('idle')

  function handleGuess(guess) {
    const guessesCopy = [...guesses, guess]
    setGuesses(guessesCopy)

    if (guess === answer) {
      setStatus('won')
    } else if (guessesCopy.length === 6) {
      setStatus('lost')
    }
  }

  return (
    <>
      <Guesses answer={answer} guesses={guesses} status={status} />
      <GuessInput handleGuess={handleGuess} status={status} />
      {status !== 'idle' && (
        <Banner answer={answer} numOfGuesses={guesses.length} status={status} />
      )}
    </>
  )
}

export default Game
