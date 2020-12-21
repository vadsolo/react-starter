import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Input = styled(InputBase)`
  input {
    color: ${p => p.theme.text};
    position: 'relative';
    border: 1px solid ${p => p.theme.border};
    border-radius: 4px;
    padding: 10px 12px;
    transition: 0.3s box-shadow, border-color;
    &:focus {
      box-shadow: ${p => fade(p.theme.primary, 0.25)} 0 0 0 0.2rem;
      border-color: ${p => p.theme.primary};
    }
  }
`;
