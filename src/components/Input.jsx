import styled from "styled-components";

export const Input = styled.input`
  font-family: inherit;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "54px"};
  padding: ${({ icon }) => (icon ? "0 16px 0 48px" : "0 16px")};
  background-color: ${({ theme, error }) =>
    error ? theme.colors?.errorBackground : theme.colors?.white};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors?.error : theme.colors?.inputBackground};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors?.grey?.grey_30};
  outline: none;
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.2s ease-in-out;
  margin-top: 5px;

  &:focus {
    background-color: ${({ theme, error }) =>
      error ? theme.colors?.errorBackground : theme.colors?.white};
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors?.error : theme.colors?.activeTitle};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors?.grey?.grey_30};
    font-size: 1rem;
    font-weight: 300;
  }

  &:disabled {
    color: #999999;
    background-color: #f2f2f2;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
