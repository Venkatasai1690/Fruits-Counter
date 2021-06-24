// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  clickMangoBtn = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  ClickBananaBtn = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes{' '}
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.clickMangoBtn}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />

              <button
                className="button"
                type="button"
                onClick={this.ClickBananaBtn}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
