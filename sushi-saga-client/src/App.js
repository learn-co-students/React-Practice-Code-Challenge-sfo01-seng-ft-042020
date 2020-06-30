import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 100,
      availableSushi: [],
      eatenSushi: [],
      index: 0,
    };
  }
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((obj) =>
        this.setState({
          availableSushi: obj,
        })
      );
  }

  fillBelt = () => {
    let i = this.state.index;
    let nextFourSushi = this.state.availableSushi.slice(i, i + 4);
    return nextFourSushi;
  };

  addSushi = () => {
    this.setState({ index: this.state.index + 4 });
  };

  eatSushi = (sushi) => {
    if (this.state.balance - sushi.price >= 0) {
      let newBalance = this.state.balance - sushi.price;
      return this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        balance: newBalance,
      });
    } else {
      console.log("no more balance");
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          addSushi={this.addSushi}
          sushi={this.fillBelt()}
          eatSushi={this.eatSushi}
          eaten={this.state.eatenSushi}
        />
        <Table balance={this.state.balance} eaten={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
