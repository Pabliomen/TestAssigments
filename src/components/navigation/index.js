import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './navigation_styles'

const SideBar = () => {
  return (
    <Styled.SideBarContainer>
      <Link to='topgeschenken'>
        wajow
      </Link>
    </Styled.SideBarContainer>
  )
}

export default SideBar
