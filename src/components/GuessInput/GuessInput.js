import React from 'react'

function GuessInput({ handleGuess, status }) {
  const [guess, setGuess] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    handleGuess(guess)
    setGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={status !== 'idle'}
        id="guess-input"
        maxLength="5"
        minLength="5"
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
