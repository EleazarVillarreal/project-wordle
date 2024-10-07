import React from 'react'

function Guess({ guess = '' }) {
  const lettersArr = guess ? guess.split('') : Array(5).fill()

  return (
    <p class="guess">
      {lettersArr.map((letter, i) => (
        <span className="cell" key={i}>
          {letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
