import styled from 'styled-components';

export const ButtonDetails = styled.button`
  border-radius: 3px;
  padding: 5px 0;
  margin-left: 5px;
  width: 40px;
  background: ${(props) => props.theme.colors.primary};
  color: whitesmoke;
  float: right;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
    color: whitesmoke;
  }
`;
