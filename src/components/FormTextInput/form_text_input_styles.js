import styled from 'styled-components'
import { Colors } from '../../constants/colors'

const TextInputStyled = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
`

TextInputStyled.itemLabel = styled.div`
  font-family: 'Arial-BoldMT', sans-serif;
  font-size: 13px;
  color: ${Colors.battleshipGrey};
  margin-left: 8px;
`

TextInputStyled.input = styled.input`
  background-color: ${props =>
    props.submitted ? Colors.lightGray : Colors.white};
  border-width: 1px;
  width: 95%;
  font-size: 14px;
  color: ${Colors.black};
  height: 38px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  border-color: ${Colors.textInputBorderColor};
  &:hover {
    border: 1px solid ${Colors.azure};
  }
  &:focus {
    border: 1px solid ${Colors.azure};
  }
  &:disabled {
    border: ${Colors.textInputBorderColor};
    background: ${Colors.textInputDisabledBackground};
    color: ${Colors.battleshipGrey};
  }
  &:placeholder {
    color: ${Colors.inputPlaceholderColor};
    font-size: 14px;
  }
`

TextInputStyled.errorMsg = styled.div`
  font-family: Arial;
  text-align: right;
  font-size: 12px;
  color: ${Colors.errorColor};
  min-height: 18px;
`

export default TextInputStyled
