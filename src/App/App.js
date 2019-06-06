import React, { Component } from 'react'
import OrderForm from '../forms/OrderForm/OrderForm'
import ResponseForm from '../forms/ResponseForm/ResponseForm'
import AppStyled from './app_styles'

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <AppStyled>
        <OrderForm />
        <AppStyled.screenDivider />
        <ResponseForm />
      </AppStyled>
    )
  }
}

export default App
