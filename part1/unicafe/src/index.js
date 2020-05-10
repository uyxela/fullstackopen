import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistic from './Statistic'
import Button from './Button'

const Statistics = (props) => {
  if (!props.good && !props.neutral && !props.bad) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.good + props.neutral + props.bad} />
        <Statistic text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <Statistic text="positive" value={props.good / (props.good + props.neutral + props.bad)} />
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)