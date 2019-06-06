import styled, { keyframes } from 'styled-components'
import { Colors } from '../../constants/colors'

const OrderFormStyled = styled.div`
  width: 480px;
  background-color: white;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${Colors.cardBorderColor};
  box-shadow: ${Colors.cardShadow};
  padding: 20px;
  position: relative;
`

OrderFormStyled.title = styled.div`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.black};
`

OrderFormStyled.subtitle = styled.div`
  font-family: Arial;
  font-size: 13px;
  color: ${Colors.battleshipGrey};
  margin-bottom: 10px;
`

OrderFormStyled.formControls = styled.div`
  display: flex;
  justify-content: flex-end;
`

OrderFormStyled.button = styled.button`
  font-family: 'Arial-BoldMT', sans-serif;
  font-size: 12px;
  color: ${props => (props.disabled ? Colors.battleshipGrey : Colors.white)};
  padding: 5px 50px 5px 50px;
  border: 1px solid ${Colors.textInputBorderColor};
  background-color: ${props =>
    props.disabled ? Colors.buttonDisabledBackground : Colors.azure};
  border-radius: 8px;
  &:disabled {
    color: ${Colors.battleshipGrey};
    background: ${Colors.buttonDisabledBackground};
  }
`

OrderFormStyled.response = styled.div`
  display: flex;
  justify-content: space-between;
`

OrderFormStyled.responseTitle = styled.div`
  font-family: 'Arial-BoldMT', sans-serif;
  font-size: 13px;
  color: ${Colors.battleshipGrey};
  margin-left: 8px;
`

OrderFormStyled.responseIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65px;
  margin-right: 10px;
`

OrderFormStyled.responseIcon = styled.img`
  width: 20px;
  height: 20px;
`

OrderFormStyled.checkMark = styled.img`
  margin-left: 50px;
  width: 20px;
  height: 20px;
`

const fadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
}
`

OrderFormStyled.overlay = styled.div`
  display: ${props => (props.overlay ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 9999;
  opacity: 1;
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`

OrderFormStyled.overlayText = styled.div`
  font-family: 'Arial-BoldMT', sans-serif;
  font-size: 16px;
  color: ${Colors.black};
`

OrderFormStyled.overlayContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export default OrderFormStyled
