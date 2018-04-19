import glamorous from 'glamorous';

import { white, whiteSmoke, rgba } from '../../config/colours';

export const NavbarContainer = glamorous.div({
  width: '100%',
  display: 'flex',
  flex: 1,
});

export const NavbarItem = glamorous.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const BrandName = glamorous.h1({
  color: white,
});

export const NavbarLink = glamorous.a({
  ':hover': {
    color: white,
  },
}, ({ current }) => ({
  color: current ? white : whiteSmoke,
  // fontWeight: current ? 'bold' : 'normal',
}));

export const ActionLink = glamorous.button({
  background: 'transparent',
  border: `1px solid ${rgba(white, 0.2)}`,
  borderRadius: '4px',
  padding: '7.5px 15px',
  margin: '10px',
  color: white,
  ':hover': {
    background: rgba(white, 0.2),
  },
});
