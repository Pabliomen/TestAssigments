import React from 'react'
import { Button, PageContainer } from '../welcome/welcome_styles'
import * as Styled from './topgeschenken_styles'

import OpdrachtEen from './opdracht_een'
import OpdrachtTwee from './opdracht_twee'
import OpdrachtDrie from './opdracht_drie'
import OpdrachtVier from './opdracht_vier'

class TopGeschenken extends React.Component {
  state = { currentAssignment: 1 }

  goToNextAssignment = () => {
    if (this.state.currentAssignment !== 4) {
      this.setState({ currentAssignment: this.state.currentAssignment + 1 })
    }
  }

  goBackOneAssignment = () => {
    if (this.state.currentAssignment !== 1) {
      this.setState({ currentAssignment: this.state.currentAssignment - 1 })
    }
  }

  assignments = () => {
    switch (this.state.currentAssignment) {
      case 1: return <OpdrachtEen/>
      case 2: return <OpdrachtTwee/>
      case 3: return <OpdrachtDrie/>
      case 4: return <OpdrachtVier/>
    }
  }

  render() {
    return (
      <PageContainer>
        <Styled.OpdrachtEenContainer>
            <h1>Opdracht {this.state.currentAssignment}</h1>

            {this.assignments()}

          <Styled.ButtonContainer>
            <Styled.Button onClick={this.goBackOneAssignment}>
                Vorige opdracht
            </Styled.Button>
            <Styled.Button onClick={this.goToNextAssignment}>
                Volgende opdracht
            </Styled.Button>
          </Styled.ButtonContainer>
        </Styled.OpdrachtEenContainer>
      </PageContainer>
    )
  }
}

export default TopGeschenken