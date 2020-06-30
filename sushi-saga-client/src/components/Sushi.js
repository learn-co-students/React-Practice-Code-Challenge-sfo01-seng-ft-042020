import React, { Component }  from 'react'

class Sushi extends Component { 
  state = {
    isEaten: false
  }
  
  eatSushi = () => {
    this.setState({isEaten: true})
  }
  render() {
    const { sushi, handleClick } = this.props
    return(
      <div className="sushi">
        <div className="plate" 
            onClick={this.eatSushi}>
          {this.state.isEaten === false ? <img src={sushi.img_url} alt='' width="100%" onClick={() => handleClick(sushi)}/> : null}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi