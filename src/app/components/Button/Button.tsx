import ButtonMUI from '@material-ui/core/Button';
import styled from 'styled-components';

export const Button = styled(ButtonMUI)`
  box-shadow: none;
  text-transform: none;
  color: #fff;
  padding: 6px 12px;
  border: 1px solid;
  line-height: 1.5;
  background-color: #0063cc;
  border-color: #0063cc;
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
    background-color: #0062cc;
    border-color: #005cbf;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;
