import React from 'react';

import TypographyMUI from '@material-ui/core/Typography';
import styled from 'styled-components';

interface Props {
  inverted?: boolean;
}

export const Typography = styled(TypographyMUI)<Props>`
  color: ${p => (p.inverted ? p.theme.textSecondary : p.theme.text)};
`;
