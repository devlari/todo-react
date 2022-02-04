import styled from 'styled-components';

export const ButtonDelete = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 5px;
  background: ${(props) => props.theme.colors.primary};
  color: whitesmoke;
  float: right;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
  }
`;
