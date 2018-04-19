import glamorous from 'glamorous';

import { primary, primaryLight, primaryDark, rgba, white, whiteSmoke } from '../../config/colours';

export const VideoBackground = glamorous.video({
  width: '100%',
  height: '100vh',
  objectFit: 'fill',
});

export const GradientOverlay = glamorous.div({
  left: 0,
  top: 0,
  position: 'absolute',
  width: '100%',
  height: '100vh',
  background: `linear-gradient(to right, ${rgba(primary, 0.4)}, ${rgba(primaryDark, 0.4)})`,
});

export const Content = glamorous.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const MessageContainer = glamorous.div({
  marginTop: '7.5%',
});

export const Message = glamorous.h2({
  color: white,
  textAlign: 'center',
});

export const SubMessage = glamorous.p({
  color: whiteSmoke,
  textAlign: 'center',
});
