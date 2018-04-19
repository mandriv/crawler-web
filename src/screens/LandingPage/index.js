import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../shared/Navbar';
import { VideoBackground, GradientOverlay, Content, MessageContainer, Message, SubMessage } from './styles';

export default class LandingPage extends PureComponent {

  render() {
    return (
      <div>
        <VideoBackground src="assets/videos/background.mp4" muted autoPlay loop>
        </VideoBackground>
        <GradientOverlay>
          <Navbar/>
          <Content>
            <MessageContainer>
              <Message>
                Have a total overview of your premises
              </Message>
              <SubMessage>
                Overseer allows you to monitor your area using stationary and mobile sensoric data.
              </SubMessage>
              <SubMessage>
                Let Internet of Things provide you and your people safety
              </SubMessage>
            </MessageContainer>
          </Content>
        </GradientOverlay>
      </div>
    );
  }
}

LandingPage.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
};

LandingPage.defaultProps = {

};
