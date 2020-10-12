import React from 'react'
import * as Styled from './topgeschenken_styles'

class OpdrachtVier extends React.Component {
  state= { tablePositions: [[1,2,3], [4,5,6], [7,8,9]], angle: 0}

// enter rotations by number, 1 = 90 degrees turned
  showTurnableArray = () => {
    const turnableArray = this.state.tablePositions
    const angle = this.state.angle

    let newRow1 = []
    let newRow2 = []
    let newRow3 = []

    turnableArray.map(row => {
      if (angle === 90 || angle === -270) {
        newRow1 = [row[0], ...newRow1]
        newRow2 = [row[1], ...newRow2]
        newRow3 = [row[2], ...newRow3]
      } else if (angle === 270 || angle === -90) {
        newRow1 = [...newRow1, row[2]]
        newRow2 = [...newRow2, row[1]]
        newRow3 = [...newRow3, row[0]]
      } else if (angle === 180 || angle === -180) {
        newRow1 = turnableArray[2].reverse()
        newRow2 = turnableArray[1].reverse()
        newRow3 = turnableArray[0].reverse()
      } else {
        newRow1 = turnableArray[0]
        newRow2 = turnableArray[1]
        newRow3 = turnableArray[2]
      }

    })
    
    return [newRow1, newRow2, newRow3]
  }

  turnTableClockwise= () => {
    const newAngle = this.state.angle !== 270 ? this.state.angle + 90 : 0
    this.setState({ angle: newAngle})
  }

  turnTableCounterClockwise= () => {
    const newAngle = this.state.angle !== -270 ? this.state.angle - 90 : 0
    this.setState({ angle: newAngle})  }

  render () {
    return (
      <Styled.OpdrachtVierContainer>
        <button onClick={this.turnTableCounterClockwise}>
          <Styled.ArrowLeft />
        </button>
        <div>
          {this.showTurnableArray().map(row => {
            return (
              <Styled.TableRow>
                {row.map(item => {
                  return <Styled.TableItem>{item}</Styled.TableItem>
                })}
              </Styled.TableRow>
            )
          })}
        </div>
        <button onClick={this.turnTableClockwise}>
          <Styled.ArrowRight />
        </button>
      </Styled.OpdrachtVierContainer>
    )
  }
}

export default OpdrachtVier
