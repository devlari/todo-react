import styled from 'styled-components';

type Props = {
  t?: boolean;
  subt?: boolean;
};

export const Title = styled.p<Props>`
  font-size: ${(props) => (props.t ? '30pt' : '15pt')};
  color: ${(props) =>
    props.t ? props.theme.colors.primary : props.theme.colors.secondary};
  margin: ${(props) => (props.t ? '20px' : '0px')};
  text-align: ${(props) => (props.t ? 'center' : 'left')};
  margin-bottom: ${(props) => (props.subt ? '10px' : '0')};
`;
