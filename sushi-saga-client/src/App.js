import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eatenSushi: [],
    totalCash: 100
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const sushis = data.map(sushi => ({...sushi, isEaten: false}))
      this.setState({ sushis })
    })
  }

  handleClick = (sushi) => {
    this.setState({eatenSushi: [...this.state.eatenSushi, sushi]})


    if (sushi.price <= this.state.totalCash) {
      this.setState({totalCash: this.state.totalCash - sushi.price})
    } 
    else if (sushi.price > this.state.totalCash) {
      alert("I don't have enough money!")
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} handleClick={this.handleClick} />
        <Table totalCash={this.state.totalCash} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;