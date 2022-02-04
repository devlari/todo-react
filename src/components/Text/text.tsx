import styled from 'styled-components';

type Props = {
  label?: boolean;
  description?: boolean;
};

export const Text = styled.p<Props>`
  font-size: '15pt';
  text-align: ${(props) => (props.description ? 'justify-all' : 'left')};
  margin: ${(props) => (props.description ? '20px 0' : '0')};
`;
