import React from 'react';
import Directory from '../../components/directory/directory.component';
import Title from '../../components/title/Title';
import './homepage.styles.scss';

const HomePage = () => (
  <HomePageContainer>
    <Title />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
