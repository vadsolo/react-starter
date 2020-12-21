import SwitchMUI from '@material-ui/core/Switch';
import styled from 'styled-components';

export const Switch = styled(SwitchMUI)`
  .Mui-checked {
    color: ${p => p.theme.colors.lightpurple};
  }
  .Mui-checked + .MuiSwitch-track {
    background-color: #fff;
  }
`;
