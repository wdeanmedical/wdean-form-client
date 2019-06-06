import React, { Component } from 'react'
import OrderForm from '../forms/OrderForm/OrderForm'
import AppStyled from './app_styles'

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <AppStyled>
        <OrderForm />
      </AppStyled>
    )
  }
}

export default App
