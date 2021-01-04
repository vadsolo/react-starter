import React from 'react';
import { Switch } from '../Switch/Switch';

import { PageWrapper } from '../PageWrapper/PageWrapper';
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

export default function MenuAppBar() {
  return (
    <Wrapper>
      <PageWrapper
        maxWidth="lg"
        style={{
          display: 'flex',
        }}
      >
        <LeftSection>
          <Logo />
          <MainNav />
        </LeftSection>

        <RightSection>
          <Item>SignIn</Item>
          <Item>SignOut</Item>
          <Switch />
        </RightSection>
      </PageWrapper>
    </Wrapper>
  );
}
