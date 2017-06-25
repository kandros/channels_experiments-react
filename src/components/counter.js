import React, { Component } from 'react'
import socket from '../socket'

class Counter extends Component {
  state = {counter: 0}
  componentDidMount() {
    this.channel = socket.channel("room:counter", {})

    this.channel.join()
      .receive("ok", resp => { console.log("Joined counter", resp) })
      .receive("error", resp => { console.log("Unable to join counter", resp) })

    this.channel.on("counter_state", payload => {
      console.log('counter_state', payload)
      this.setState({
        counter: payload.counter
      })
    })
  }

  increment = () => {
    this.channel.push("increment")
  }

  decrement = () => {
    this.channel.push("decrement")
  }

  render() {
    return (
      <div>
        counter: {this.state.counter}
        <div>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter