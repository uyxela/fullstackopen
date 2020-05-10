import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Max = (props) => {
  let maxIndex = 0
  for (let i=0; i < props.anecdotes.length; ++i) {
    if (props.points[i] > props.points[maxIndex]) {
      maxIndex = i
    }
  }
  return (
  <>
    <p>{props.anecdotes[maxIndex]}</p>
    <p>has {props.points[maxIndex]} votes</p>
  </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(Math.round((props.anecdotes.length - 1) * Math.random()))
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => {
        const copy = { ...points }
        ++copy[selected]
        setPoints(copy)
      }}>vote</button>
      <button onClick={() => setSelected(Math.round((props.anecdotes.length - 1) * Math.random()))}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <Max anecdotes={props.anecdotes} points={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)