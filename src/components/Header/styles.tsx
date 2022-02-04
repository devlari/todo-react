import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { BsFillPencilFill } from 'react-icons/bs';

type Props = {
  toggleTheme(): void;
};

export const Header = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

export function RenderHeader(props: Props) {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Header>
      <BsFillPencilFill color={colors.background} />
      <Switch
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor='#d4d4d4'
        onColor='#37363d'
      />
    </Header>
  );
}
