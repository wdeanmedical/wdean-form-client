import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Images from '@local/assets'
import { sendOrder } from '../../state/actions'
import form from '../../config/fields'
import OrderFormStyled from './order_form_styles'

class OrderForm extends Component {
  state = {
    message: 'enter your suggestion details:',
    title: 'suggestion submission form:',
    submitted: false,
    fields: {},
    errors: {},
    overlay: false,
  }

  componentDidMount() {}

  validateForm = () => {
    this.setState({
      errors: {},
    })

    const { fields } = this.state

    const errors = {}
    let isValid = true

    const urlPattern = new RegExp(
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi
    )
    if (!urlPattern.test(fields.website)) {
      isValid = false
      errors.website = 'enter a valid website url...'
    }

    const emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )
    if (!emailPattern.test(fields.email)) {
      isValid = false
      errors.email = 'enter a valid email address...'
    }
    this.setState({ errors })
    return isValid
  }

  submitForm = () => {
    const { sendOrder: dispatchSendOrder } = this.props
    const { fields } = this.state
    const order = fields

    if (this.validateForm()) {
      dispatchSendOrder(order)
      this.setState({
        submitted: true,
        title: 'submitted suggestion form',
        message:
          'a rep will respond to your suggestion soon! here is what you submitted:',
        overlay: true,
      })
      setTimeout(() => {
        this.setState({ overlay: false })
      }, 2200)
    }
  }

  formMapper(field) {
    const { FormComponent } = field
    const { fields, errors, submitted } = this.state
    return (
      <FormComponent
        field={field}
        submitted={submitted}
        key={field.id}
        value={fields[field.name]}
        errorMessage={errors[field.name]}
        currentForm={this}
      />
    )
  }

  render() {
    const { response } = this.props
    const { title, message, submitted, overlay } = this.state
    return (
      <OrderFormStyled>
        <OrderFormStyled.title>{title}</OrderFormStyled.title>
        <OrderFormStyled.subtitle>{message}</OrderFormStyled.subtitle>

        {form.map(this.formMapper, this)}

        {submitted === false && (
          <OrderFormStyled.formControls>
            <OrderFormStyled.button onClick={this.submitForm} {...this.props}>
              Submit
            </OrderFormStyled.button>
          </OrderFormStyled.formControls>
        )}
        <OrderFormStyled.overlay {...this.state}>
          <OrderFormStyled.overlayContent>
            <OrderFormStyled.checkMark
              src={Images.checkMark}
              alt="check mark"
            />
            <OrderFormStyled.overlayText>
              Form Submitted!
            </OrderFormStyled.overlayText>
          </OrderFormStyled.overlayContent>
        </OrderFormStyled.overlay>
      </OrderFormStyled>
    )
  }
}

const mapStateToProps = state => {
  const { response } = state.app
  return response || {}
}

const mapDispatchToProps = dispatch => ({
  sendOrder: order => dispatch(sendOrder(order)),
})

OrderForm.propTypes = {
  response: PropTypes.string,
  sendOrder: PropTypes.func,
}

OrderForm.defaultProps = {
  response: null,
  sendOrder: undefined,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm)
