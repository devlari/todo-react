import styled from 'styled-components';

export const ButtonSend = styled.button`
  /* display: inline-block; */
  border-radius: 3px;
  padding: 10px 0;
  width: 5rem;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  transition: all 0.5s;
  float: right;
  margin: 15px 0;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
