import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './welcome_styles'

const Welcome = () => {
  return (
    <Styled.PageContainer>
      <Styled.WelcomeMessage>
        <h1>Welkom!</h1>
        <p>Hier kan je alle opdrachten vinden die gemaakt zijn voor Topgeschenken.nl!</p>
        <Styled.Button>
          <Link to="/topgeschenken">
            Naar de opdrachten!
          </Link>
        </Styled.Button>
      </Styled.WelcomeMessage>
    </Styled.PageContainer>
  )
}

export default Welcome
