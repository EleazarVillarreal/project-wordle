import React from 'react'

function Guesses({ guesses }) {
  return (
    <div class="guess-results">
      {guesses?.map((guess, i) => (
        <p class="guess" key={i}>
          {guess}
        </p>
      ))}
    </div>
  )
}

export default Guesses
