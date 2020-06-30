import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
    state = {
      currentFour: 0
    }

    nextFour = () => {
      this.setState({
        currentFour: this.state.currentFour + 4
      })
    }
    render() {
      const { sushis, handleClick} = this.props
      return (
      <div className="belt">
        {sushis.slice(this.state.currentFour, this.state.currentFour + 4).map(el => <Sushi key={el.id} sushi={el} handleClick={handleClick}/>)}
        <MoreButton nextFour={this.nextFour} />
      </div>
    )
  }
}
export default SushiContainer