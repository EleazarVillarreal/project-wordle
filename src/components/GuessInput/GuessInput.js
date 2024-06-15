import React, { useState } from 'react'

function GuessInput() {
  const [guess, setGuess] = useState('')

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault()
        console.log(guess)
        setGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        required
        title="5 Letter Word"
        type="text"
        value={guess}
      />
    </form>
  )
}

export default GuessInput
