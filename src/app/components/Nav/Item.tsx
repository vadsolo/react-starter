import styled from 'styled-components';

export const Item = styled.a`
  color: ${p => p.theme.text};
  cursor: pointer;
  text-decoration: none;

  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
