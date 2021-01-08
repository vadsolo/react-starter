import DrawerMUI from '@material-ui/core/Drawer';
import styled from 'styled-components';

interface DrawerProps {
  width?: string;
}

export const Drawer = styled(DrawerMUI)<DrawerProps>`
  .MuiDrawer-paper {
    width: ${props => props.width || 'auto'};
  }
`;
