import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';


import { FullScreenPhoto } from './styles';

export default class VideoStream extends React.PureComponent {

  state = {
    src: '',
  };

  componentDidMount() {
    const { robotID } = this.props.match.params;
    this.socket = io('https://rc.overseer.ml', {
      transports: ['websocket'],
    });
    this.socket.emit('video-stream-join', robotID);
    this.socket.on('video-stream', (filename) => {
      console.log(filename);
      this.update(filename);
    });
  }

  update = async (filename) => {
    const response = await fetch(`https://rc.overseer.ml/video-frame/${filename}`);
    console.log(response);
    const imageBlob = await response.body.blob();
    console.log(imageBlob);
    const src = URL.createObjectURL(imageBlob);
    console.log(src);
    this.setState({ src });
  }

  render() {
    return (
      <FullScreenPhoto
        src={this.state.src}
      />
    );
  }
}

VideoStream.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line
};
