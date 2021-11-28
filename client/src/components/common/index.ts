import { Link as Link_ } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Reactselect from 'react-select';

export const Link = styled(Link_)({ color: 'inherit', textDecoration: 'none' });

export const ReactSelect = styled(Reactselect)({
  width: '100%',
  '.select__single-value': {
    color: '#f5f5f5',
  },
  '.select__control': {
    borderColor: 'transparent',
    cursor: 'pointer',
    backgroundColor: '#0D0D0D',
  },
  '.select__control:hover': {
    borderColor: 'transparent',
  },
  '.select__menu': {
    backgroundColor: '#272626',
  },
  '.select__option--is-focused': {
    backgroundColor: '#424040',
  },
  '.select__option--is-focused:hover': {
    backgroundColor: '#424040',
  },
});

export const StyledButton = styled(Button)({
  background: 'rgb(59,57,57,0.4)',
  textTransform: 'none',
  color: '#f5f5f5',
  fontWeight: 700,
  // Margin: '1rem',
  padding: '12px 16px',
  '&:hover': {
    opacity: 1,
    backgroundColor: '#424040',
  },
});

export const CenteredDiv = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;