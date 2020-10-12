import React from 'react'
import * as Styled from './topgeschenken_styles'

class OpdrachtEen extends React.Component {
  devidableBy = (number, value) => {
    return value % number === 0
  }
  
  theTopGeschenker = () => {
    let items = []

    for (var x = 1; x <= 100; x++) {
      if(this.devidableBy(3, x) && this.devidableBy(5, x)) items = items.concat('Topgeschenken')
      else if(this.devidableBy(3, x)) items = items.concat('Top')
      else if(this.devidableBy(5, x)) items = items.concat('geschenken')
      else items = items.concat(x)
    }

    return items
  }

  render () {
    return (
      <Styled.TopGeschenkerContainer>
        {this.theTopGeschenker().map((item) => {
          return <Styled.Item>{item}</Styled.Item>
        })}
      </Styled.TopGeschenkerContainer>
    )
  }
}

export default OpdrachtEen
