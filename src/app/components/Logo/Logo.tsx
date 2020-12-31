import React, { ReactElement } from 'react';

import styled from 'styled-components';

interface Props {}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 3.5rem;
  margin-right: 0.5rem;
`;

const AppName = styled.h3`
  font-weight: 900;
`;
function Logo({}: Props): ReactElement {
  return (
    <LogoWrapper>
      <LogoImg src="/world.svg" />
      <AppName>Application</AppName>
    </LogoWrapper>
  );
}

export default Logo;
