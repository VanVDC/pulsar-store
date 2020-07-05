import React from "react";
import Directory from "../../components/directory/directory.component";
import Title from "../../components/title/Title";
import { HomePageContainer } from "./homepage.styles.jsx";

const HomePage = () => (
  <HomePageContainer>
    <Title />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
