import React from 'react';
import '../App.css';
import HeroSection from '../components/Hero/HeroSection';
import { Card } from "../components";

import {
  homeOjbFour,
  homeOjbOne,
  homeOjbThree,
  homeOjbTwo,
} from "./Data";



function Home() {
  return (
    <>
      <HeroSection />
      <Card id="about" {...homeOjbOne} />
      <Card id="projects" {...homeOjbTwo} />
      <Card id="articles" {...homeOjbThree} />
      <Card id="social" {...homeOjbFour} />
    </>
  );
}

export default Home;
