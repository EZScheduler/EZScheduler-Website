import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextArea = styled.textarea`
  width: ${({ width }) => width || '100%'};
  height: ${({ rows }) => (rows ? 'auto' : '100px')};
  padding: 16px;
  background-color: ${({ theme, error }) =>
    error ? theme.colors?.errorBackground : theme.colors?.inputBackground};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors?.error : theme.colors?.inputBackground};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors?.activeTitle};
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  resize: vertical;
  margin-top: 5px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors?.activeTitle};
    background-color: ${({ theme }) => theme.colors?.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors?.placeholder};
    font-size: 0.875rem;
    font-weight: 300;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

// TextArea.propTypes = {
//   width: PropTypes.string,
//   height: PropTypes.string,
// }

export default TextArea