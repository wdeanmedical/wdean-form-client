import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Images from '@local/assets'
import { sendResponse } from '../../state/actions'
import * as Constants from '../../constants/constants'
import ResponseFormStyled from './response_form_styles'

class ResponseForm extends Component {
  state = {
    acceptImage: Images.thumbsUpButton,
    rejectImage: Images.thumbsDownButton,
  }

  componentDidMount() {}

  submitForm = response => {
    const { sendResponse: dispatchSendResponse } = this.props
    dispatchSendResponse({ response })
  }

  render() {
    const { order, response } = this.props
    const { acceptImage, rejectImage } = this.state
    return (
      <ResponseFormStyled>
        <ResponseFormStyled.title>
          submitted suggestion form
        </ResponseFormStyled.title>
        {order === null && (
          <ResponseFormStyled.subtitle>
            currently waiting for a response...
          </ResponseFormStyled.subtitle>
        )}
        {order && (
          <div>
            <ResponseFormStyled.orderTitle>
              suggestion:
            </ResponseFormStyled.orderTitle>

            <ResponseFormStyled.order>
              <ResponseFormStyled.orderTitle>
                {order.name}
              </ResponseFormStyled.orderTitle>
              <ResponseFormStyled.orderTitle>
                {order.company}
              </ResponseFormStyled.orderTitle>
              <ResponseFormStyled.orderTitle>
                <a
                  href={order.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {order.website}
                </a>
              </ResponseFormStyled.orderTitle>
              <ResponseFormStyled.orderItem>
                {order.email}
              </ResponseFormStyled.orderItem>
              <ResponseFormStyled.orderItem>
                {order.specialty}
              </ResponseFormStyled.orderItem>
              <ResponseFormStyled.orderItem>
                {order.price}
              </ResponseFormStyled.orderItem>
            </ResponseFormStyled.order>

            <ResponseFormStyled.responseForm>
              <ResponseFormStyled.controlTitle>
                submit a response:
              </ResponseFormStyled.controlTitle>
              <ResponseFormStyled.controls>
                <img
                  width="30"
                  height="30"
                  src={
                    response && response.response === Constants.REJECT
                      ? Images.thumbsDownButtonSubmitted
                      : rejectImage
                  }
                  onMouseEnter={() => {
                    this.setState({
                      rejectImage: Images.thumbsDownButtonHover,
                    })
                  }}
                  onMouseOut={() => {
                    this.setState({
                      rejectImage: Images.thumbsDownButton,
                    })
                  }}
                  alt="reject"
                  onClick={() => this.submitForm(Constants.REJECT)}
                />
                <img
                  width="30"
                  height="30"
                  src={
                    response && response.response === Constants.ACCEPT
                      ? Images.thumbsUpButtonSubmitted
                      : acceptImage
                  }
                  onMouseEnter={() => {
                    this.setState({
                      acceptImage: Images.thumbsUpButtonHover,
                    })
                  }}
                  onMouseOut={() => {
                    this.setState({
                      acceptImage: Images.thumbsUpButton,
                    })
                  }}
                  alt="accept"
                  onClick={() => this.submitForm(Constants.ACCEPT)}
                />
              </ResponseFormStyled.controls>
            </ResponseFormStyled.responseForm>
          </div>
        )}
      </ResponseFormStyled>
    )
  }
}

const mapStateToProps = state => {
  const { order, response } = state.app
  return { order, response }
}

const mapDispatchToProps = dispatch => ({
  sendResponse: response => dispatch(sendResponse(response)),
})

ResponseForm.propTypes = {
  sendResponse: PropTypes.func,
  order: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    specialty: PropTypes.string,
    price: PropTypes.string,
  }),
  response: PropTypes.shape({
    response: PropTypes.string,
  }),
}

ResponseForm.defaultProps = {
  sendResponse: undefined,
  order: {},
  response: null,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponseForm)
