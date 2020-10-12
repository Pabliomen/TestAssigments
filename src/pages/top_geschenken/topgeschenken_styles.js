import styled from 'styled-components'

export const OpdrachtEenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 500px;
  padding: 50px;
  border-radius: 50%;
  text-align: center;
  background-color: ${({theme}) => theme.colors.white};
`

export const OpdrachtVierContainer = styled.div`
  display: flex;
`

export const TopGeschenkerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 330px;
  width: 370px;
`

export const Item = styled.div`
  margin-right: 10px;
  font-size: 11px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  margin-top: 16px;
  padding: 0px 10px;
  border-radius: 20px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.orange};
  transition: 0.1s all ease-in-out;
  cursor: pointer;

  a {
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
  }

  &:active{
    opacity: 0.8;
    transform: scale(0.95)
  }
`

export const Input = styled.input`
  height: 32px;
  width: 120px;
  padding: 0 15px;
  border: 1px solid ${({theme}) => theme.colors.darkblue};
  border-radius: 20px;

  &:focus {
    outline: none;
  }
`

export const SubmitButton = styled.button`
  height: 32px;
  padding: 0px 10px;
  margin-left: 12px;
  border: none;
  border-radius: 20px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  font-size: 16px;
  background-color: ${({theme}) => theme.colors.darkblue};
  transition: 0.1s all ease-in-out;
  cursor: pointer;

  a {
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
  }

  &:active{
    opacity: 0.8;
    transform: scale(0.95)
  }

  &:focus {
    outline: none;
  }
`

export const TableRow = styled.div`
  display: flex;
`

export const TableItem = styled.div`
  height: 17px;
  width: 17px;
  padding: 3px;
  border: 1px solid ${({theme}) => theme.colors.darkblue};
`

export const ArrowLeft = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  &::after {
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-width: 3px;
    content: '';
    display: inline-block;
    height: 20px;
    left: 0;
    position: absolute;
    top: 0;
    width: 20px;
    transform: rotate(135deg);
  }
`

export const ArrowRight = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  &::after {
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-width: 3px;
    content: '';
    display: inline-block;
    height: 20px;
    left: -10px;
    position: absolute;
    top: 0;
    width: 20px;
    transform: rotate(-45deg);
  }
`
