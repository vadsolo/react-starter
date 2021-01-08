import React, { useState } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import Hidden from '@material-ui/core/Hidden';
import { StyleConstants } from 'styles/StyleConstants';
import { media } from 'styles/media';
import Navbar from './components/Navbar/Navbar';
import { PageWrapper as ContentWrapper } from './components/PageWrapper/PageWrapper';

import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import ExampleRequest from './containers/ExampleRequest';
import ExampleAPI from './containers/ExampleAPI';
import { Drawer } from './components/Drawer/Drawer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.md`
    width: calc(100% - ${StyleConstants.DRAWER_WIDTH});
  `}
`;

const SidebarWrapper = styled.nav`
  ${media.md`
  display: flex;
  width: ${StyleConstants.DRAWER_WIDTH};
  `};
`;

function App() {
  const [open, setVisibility] = useState(false);

  const drawerContent = (
    <Button
      style={{ margin: 'auto' }}
      onClick={() => setVisibility(!open)}
      customColor={{
        mainColor: '#cecece',
        borderColor: '#a3a3a3',
        hoverColor: '#c4c4c4',
      }}
    >
      Coming Soon...
    </Button>
  );
  return (
    <Wrapper>
      <SidebarWrapper>
        <Hidden smDown>
          <Drawer
            anchor={'left'}
            open
            variant="permanent"
            width={StyleConstants.DRAWER_WIDTH}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={open}
            onClose={() => setVisibility(!open)}
            width={StyleConstants.DRAWER_WIDTH}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
      </SidebarWrapper>
      <PageWrapper>
        <Navbar
          onMobileMenuClick={() => {
            setVisibility(!open);
          }}
        />
        <ContentWrapper maxWidth="lg">
          <Input placeholder="Enter some text"></Input>
          <Button style={{ marginLeft: 10 }}>Submit</Button>

          <Button style={{ marginLeft: 10 }} warning>
            Cancel
          </Button>
          <Button style={{ marginLeft: 10 }} danger>
            Cancel
          </Button>
          <Button style={{ marginLeft: 10 }} success>
            Cancel
          </Button>
          <img style={{ maxWidth: '100%' }} src="/sides.svg" alt="hero" />

          <ExampleRequest />
          <ExampleAPI />
        </ContentWrapper>
      </PageWrapper>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
