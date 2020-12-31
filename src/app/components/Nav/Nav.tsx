import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Item } from './Item';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

interface Props {}

function Nav({}: Props): ReactElement {
  return (
    <Wrapper>
      <Item>Main</Item>
      <Item>Create</Item>
    </Wrapper>
  );
}

export default Nav;
