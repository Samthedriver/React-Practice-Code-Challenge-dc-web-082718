import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super();

    this.state = {
      allSushi: [],
      sushiIndex: 0,
      eatenSushi: [],
      moneyLeft: 100
    };

  }

  nextFourSushi = () => {
    let newIndex = this.state.sushiIndex + 4
    this.setState({
      sushiIndex: newIndex
    })
  }

  componentDidMount(){
    fetch(API)
      .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({
            allSushi: data
          })
        })
  }

  eatThisSushi = (id) => {
    console.log("eat this sushi!")
    console.log(id)
    let price = this.state.allSushi[id].price
    let updatedMoneyLeft = this.state.moneyLeft - price
    if(updatedMoneyLeft >= 0)
    {
      let updatedEatenSushi = [...this.state.eatenSushi, id]
      console.log(updatedEatenSushi)
      this.setState({
        eatenSushi: updatedEatenSushi,
        moneyLeft: updatedMoneyLeft
      })
    }

  }

  render() {
    return (
      <div className="app">
          <SushiContainer
           sushiToRender={this.state.allSushi.slice(this.state.sushiIndex, this.state.sushiIndex+4)} sushiIndex={this.state.sushiIndex} moneyLeft={this.state.moneyLeft} nextFourSushi={this.nextFourSushi}
          eatenSushi={this.state.eatenSushi}
          eatThisSushi={this.eatThisSushi}
          moneyLeft={this.state.moneyLeft}
        />
        <Table
          eatenSushi={this.state.eatenSushi} moneyLeft={this.state.moneyLeft}
          />
      </div>
    );
  }
}

export default App;
