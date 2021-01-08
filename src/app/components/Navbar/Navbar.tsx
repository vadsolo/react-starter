import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Select } from '../Select/Select';
import { MenuItem } from '../MenuItem/MenuItem';
import { selectThemeKey } from '../../../styles/theme/selector';
import { changeTheme } from '../../../styles/theme/slice';
import { ThemeKeyType } from '../../../styles/theme/types';
import { saveTheme } from '../../../styles/theme/utils';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '../IconButton/IconButton';
import { FiMenu } from 'react-icons/fi';

import MainNav from '../Nav/Nav';
import { Item } from '../Nav/Item';
import Logo from '../Logo/Logo';
import styled from 'styled-components';

const Wrapper = styled.header`
  box-shadow: 0 2px 2px ${p => p.theme.primaryBorder};
  width: 100%;
  background-color: ${p => p.theme.navbarBackground};
  z-index: 2;
  margin-bottom: 2rem;
  display: flex;
  padding: 0 1rem;
`;

const LeftSection = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;

  nav {
    margin-left: 2rem;
  }
`;
const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

interface NavbarProps {
  onMobileMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMobileMenuClick }) => {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();
  const handleThemeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(changeTheme(value));
  };
  return (
    <Wrapper>
      <LeftSection>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMobileMenuClick}
          >
            <FiMenu />
          </IconButton>
        </Hidden>

        <Logo />
        <Hidden smDown>
          <MainNav />
        </Hidden>
      </LeftSection>

      <RightSection>
        <Hidden xsDown>
          <Item>SignIn</Item>
          <Item>SignOut</Item>
        </Hidden>
        <Select
          value={theme}
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleThemeChange}
        >
          <MenuItem value={'system'}>Auto</MenuItem>
          <MenuItem value={'light'}>🌞 Light</MenuItem>
          <MenuItem value={'dark'}>🌑 Dark</MenuItem>
        </Select>
      </RightSection>
    </Wrapper>
  );
};

export default Navbar;
