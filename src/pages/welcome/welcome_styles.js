import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.lighterblue};
`

export const WelcomeMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;
  width: 350px;
  padding: 50px;
  border-radius: 50%;
  text-align: center;
  background-color: ${({theme}) => theme.colors.white};
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 180px;
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
