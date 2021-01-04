import SelectMUI from '@material-ui/core/Select';
import styled from 'styled-components';

export const Select = styled(SelectMUI)`
  ::before {
    border: none;
  }
  ::after {
    border: none;
  }
  :hover:not(.Mui-disabled):before {
    border: none;
  }
  .MuiSelect-select {
    /* background-color: #fff; */
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;

    &:focus {
      border-radius: 0.5rem;
    }
  }
  border-radius: 0.5rem;
  background-color: ${props => props.theme.boxBackgroundLighter};
  color: ${props => props.theme.selectPreviewText};
  .MuiSelect-icon {
    color: ${props => props.theme.selectPreviewText};
  }
`;
