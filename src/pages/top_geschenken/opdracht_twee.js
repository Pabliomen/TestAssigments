import React from 'react'
import * as Styled from './topgeschenken_styles'

class OpdrachtTwee extends React.Component {
  state = { stringReverseValue: '', reversedValue: '' }

  reverseString = () => {
    if (this.state.stringReverseValue) {
      // by using array.from it doesn't destroy the emoji
      this.setState({ reversedValue: Array.from(this.state.stringReverseValue).reverse().join("") })
    }
  }

  setValue = (e) => {
    this.setState({ stringReverseValue: e.target.value })
  }

  render () {
    return (
      <div>
        <Styled.Input onChange={this.setValue} />
        <Styled.SubmitButton onClick={this.reverseString}>draai text om</Styled.SubmitButton>
        <div>
          reversed: {this.state.reversedValue}
        </div>
      </div>
    )
  }
}

export default OpdrachtTwee
