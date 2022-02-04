import styled from 'styled-components';

type Props = {
  plus?: boolean;
};

export const Button = styled.button`
  border-radius: 3px;
  padding: ${(props: Props) => (props.plus ? '5px 10px' : '10px')};
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
