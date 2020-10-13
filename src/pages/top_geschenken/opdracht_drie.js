import React from 'react'
import * as Styled from './topgeschenken_styles'
import ShowPassword from '../../assets/eye-off.png'
import HidePassword from '../../assets/eye.png'

class OpdrachtDrie extends React.Component {
  //  normaal zou ik dit NOOIT doen maar angezien er geen tijd is voor het maken van een database setup met endpoints doe ik het deze keer wel.
  state = {
    user: {
      email: 'harold-de-eekhoorn@live.nl',
      newPassword: '',
      confimationPassword: ''
    },
    errors: '',
    showPasword: false,
    passwordChanged: false
  }

  setValue = (valueName ,value) => {
    this.setState({
      user: {
        ...this.state.user,
        [valueName]: value
      },
      errors: ''
    })
  }

  passwordsMatch = () => {
    if (
      this.state.user &&
      this.state.user.newPassword !== '' &&
      this.state.user.confimationPassword !== '' &&
      this.state.user.confimationPassword !== this.state.user.newPassword
    ) {
      this.setState({ errors: 'Wachtwoord komt niet overeen' })
    }
  }

  passwordRequirements = () => {
    const passwordExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if (this.state.user.newPassword === '') return

    if(!passwordExpression.test(this.state.user.newPassword)) {
      this.setState({ errors: 'Wachtwoord moet 1 nummer en speciaal karakter bevatten' })
    }
  }

  toggleShowPassword = () => {
    this.setState({ showPasword: !this.state.showPasword})
  }

  changePassword = () => {
    this.setState({ passwordChanged: true })
  }

  render () {
    const fieldsValid = this.state.errors === '' && this.state.user.newPassword !== '' && this.state.user.confimationPassword !== ''

    if (this.state.passwordChanged) {
      return <div>gewijzigt!</div>
    }

    return (
      <>
        <Styled.InputWithLabelContainer>
          <Styled.Label>Nieuw wachtwoord</Styled.Label>
          <Styled.Input
            onChange={(e) => this.setValue('newPassword', e.target.value)}
            onBlur={this.passwordRequirements}
            type={this.state.showPasword ? 'text' : 'password'}
          />
          <Styled.ShowPasswordImage
            onClick={this.toggleShowPassword}
            alt='show-hide-password'
            src={this.state.showPasword ? ShowPassword : HidePassword}
          />
          
        </Styled.InputWithLabelContainer>

        <Styled.InputWithLabelContainer>
          <Styled.Label>Herhaal wachtwoord</Styled.Label>
          <Styled.Input
            onChange={(e) => this.setValue('confimationPassword', e.target.value)}
            onBlur={this.passwordsMatch}
            type='password'
          />
        </Styled.InputWithLabelContainer>

        <Styled.ChangePasswordContainer>
          {this.state.errors}
        </Styled.ChangePasswordContainer>

        <Styled.SubmitButton
          disabled={!fieldsValid}
          onClick={this.changePassword}
        >
          Wachtwoord wijzigen
        </Styled.SubmitButton>
      </>
    )
  }
}

export default OpdrachtDrie
