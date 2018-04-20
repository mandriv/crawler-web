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
    this.socket = io('http://rc.overseer.ml', {
      transports: ['websocket'],
    });
    this.socket.emit('video-stream-join', robotID);
    this.socket.on('video-stream', (filename) => {
      console.log(filename);
      this.update(filename);
    });
  }

  update = async (filename) => {
    const file = await fetch(`http://rc.overseer.ml/video-frame/${filename}`);
    console.log(file);
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
