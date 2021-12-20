import styled, {css} from 'styled-components'

const Button = styled.a<{primary?: boolean, secondary?:boolean}>`  
  display: inline-block;
  border-radius: 3px;
  padding: 5px 6px 8px 5px;
  margin: 0.5rem 1rem;
  width: 11rem;  
  font-size: 16px;
  background: transparent;
  color: white;     
  text-align: center;
  border: 2px solid white;
  border-radius: 5px;

  ${props => props.primary && css`     
    background: #E31A13;
  `}

  ${props => props.secondary && css`     
    background: #1A1A1A;
  `}
`

export default Button