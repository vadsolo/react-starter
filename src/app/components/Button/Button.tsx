import ButtonMUI from '@material-ui/core/Button';
import styled, { css } from 'styled-components';
import { fade } from '@material-ui/core/styles';

export interface ButtonProps {
  danger?: boolean;
  warning?: boolean;
  success?: boolean;

  primary?: boolean;
  outline?: boolean;

  disabled?: boolean;
}

const makeStyles = ({
  mainColor,
  hoverColor,
  borderColor,
  outline,
}: {
  mainColor: string;
  hoverColor: string;
  borderColor: string;
  outline?: boolean;
}) => {
  if (outline) {
    return css`
      background: transparent;
      border: 1px solid ${mainColor};
      color: ${mainColor};
      &:hover {
        color: #fff;
        background-color: ${mainColor};
        border-color: ${borderColor};
        box-shadow: none;
      }
      &:active {
        color: ${mainColor};
        box-shadow: none;
        background-color: ${mainColor};
        border-color: ${borderColor};
      }
      &:focus {
        box-shadow: ${p => fade(mainColor, 0.3)} 0 0 0 0.2rem;
      }
    `;
  }

  return css`
    background: ${mainColor};

    &:hover {
      background-color: ${hoverColor};
      border-color: ${borderColor};
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
      background-color: ${hoverColor};
      border-color: ${borderColor};
    }
    &:focus {
      box-shadow: ${p => fade(hoverColor, 0.3)} 0 0 0 0.2rem;
    }
  `;
};

export const Button = styled(ButtonMUI)<ButtonProps>`
  color: #fff;
  padding: 0.5rem 0.8rem;
  border-radius: 0.2rem;
  line-height: 1.5;
  text-transform: uppercase;

  ${({ outline, theme, warning, danger, success, primary, disabled }) => {
    if (disabled) {
      return css`
        background: ${outline ? 'transparent' : theme.disabled};
        border: 1px solid ${theme.disabled};
        color: ${theme.disabled};
      `;
    }
    if (warning) {
      return makeStyles({
        mainColor: theme.warningPrimary,
        hoverColor: theme.warningHover,
        borderColor: theme.warningBorder,
        outline,
      });
    }

    if (danger) {
      return makeStyles({
        mainColor: theme.dangerPrimary,
        hoverColor: theme.dangerHover,
        borderColor: theme.dangerBorder,
        outline,
      });
    }
    if (success) {
      return makeStyles({
        mainColor: theme.successPrimary,
        hoverColor: theme.successHover,
        borderColor: theme.successBorder,
        outline,
      });
    }
    if (primary) {
      return makeStyles({
        mainColor: theme.primary,
        hoverColor: theme.primaryHover,
        borderColor: theme.primaryBorder,
        outline,
      });
    }

    return makeStyles({
      mainColor: theme.primary,
      hoverColor: theme.primaryHover,
      borderColor: theme.primaryBorder,
      outline,
    });
  }}
`;
