import glamorous from 'glamorous';
import { primaryLight, primary } from '../../config/colours';

const DefaultBackground = glamorous.div({
  width: '100%',
  height: '100vh',
  background: `linear-gradient(to right, ${primaryLight}, ${primary})`,
});

export default DefaultBackground;
