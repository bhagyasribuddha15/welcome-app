// Write your code here

import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  ButtonClicked = () => {
    this.setState(prevSate => ({
      isSubscribed: !prevSate.isSubscribed,
    }))
  }
  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div>
        <h1>Welcome</h1>
        <p>Thankyou!Happy Learning</p>
        <button onClick={this.ButtonClicked}>{buttonText}</button>
      </div>
    )
  }
}
export default Welcome
