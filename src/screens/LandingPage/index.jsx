import React from 'react';

import Navbar from '../../shared/Navbar';
import { VideoBackground, GradientOverlay, Content, MessageContainer, Message, SubMessage } from './styles';

const LandingPage = () => (
  <div>
    <VideoBackground src="assets/videos/background.mp4" muted autoPlay loop />
    <GradientOverlay>
      <Navbar />
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

export default LandingPage;
