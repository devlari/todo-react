import styled from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  color: '${(props) => props.theme.colors.text}' !important;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
