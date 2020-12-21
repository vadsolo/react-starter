import React from 'react';

import { PageWrapper } from '../PageWrapper/PageWrapper';
import { Typography } from '../Typography/Typography';
import { Switch } from '../Switch/Switch';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components';

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.primary};
  z-index: 2;
  align-items: center;
  padding: 1rem 2rem;
`;

const MarginLeft = styled.div`
  margin-left: auto;
`;
export default function MenuAppBar() {
  return (
    <Wrapper>
      <Typography variant="h6" inverted>
        My App
      </Typography>
      <MarginLeft>
        <Switch />
      </MarginLeft>
    </Wrapper>
  );
}
