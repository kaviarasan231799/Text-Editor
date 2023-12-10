import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 16px;
  height: 50%;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
