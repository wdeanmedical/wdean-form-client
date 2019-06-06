import styled from 'styled-components'
import { Colors } from '../constants/colors'

const AppStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 500px;
  width: 1000px;
  margin: auto;
  margin-top: 30px;
`

AppStyled.screenDivider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${Colors.dividerColor};
`

export default AppStyled
