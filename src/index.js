import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';


const Total =(props)=>{
  if (props.vote.length === 0) {
    return (
      <div>
        Vote
      </div>
    )
  }

  return (
    <div>
      <h4>has: {props.vote} votes</h4> 
    </div>
  )
}

const Header= ()=>{
  return(
    <div>
      <h2>Anecdote of the day</h2>
    </div>
  )
}

const Footer= () => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
      <p>has 7 votes</p>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const points = { 0: 1, 1: 3, 2: 4, 3: 2 }
  const copy = { points }
  copy[2] += 1 
  

  const handleVoteClick = () => {
    setVote(vote + 1)
  }

 const handleSelectedClick = () => {
    setSelected(selected +1)
  }

  return (
    <div>
      <Header />
      {props.anecdotes[selected]}
      <br/>
      <Total vote={vote} />
      <Button onClick={handleVoteClick} text='Vote' />
      <Button onClick={handleSelectedClick} text='Next anecdote' />
      <Footer/>
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













