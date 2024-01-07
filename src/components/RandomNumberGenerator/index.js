// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}
  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="h1">Random Number</h1>
          <p className="p1">
            {' '}
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="p2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
