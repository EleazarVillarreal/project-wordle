import React from 'react'

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <p clasName="guess" key={i}>
          {guess}
        </p>
      ))}
    </div>
  )
}

export default Guesses
