import ButtonMUI from '@material-ui/core/Button';
import styled from 'styled-components';

export const Button = styled(ButtonMUI)`
  box-shadow: none;
  text-transform: none;
  color: #fff;
  padding: 6px 12px;
  border: 1px solid;
  line-height: 1.5;
  background-color: ${p => p.theme.primary};
  border-color: ${p => p.theme.primary};
  &:hover {
    background-color: ${p => p.theme.primary};
    border-color: ${p => p.theme.primaryBorder};
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
    background-color: ${p => p.theme.primary};
    border-color: ${p => p.theme.primaryBorder};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem ${p => p.theme.primaryBorder};
  }
`;
