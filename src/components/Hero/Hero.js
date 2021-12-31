import React from 'react';
import { ButtonFront, Section, SectionTitle } from '../../styles/GlobalComponents';
import { SectionImage, SectionText, SectionText1 } from './HeroStyles';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection display="flex">
      <SectionTitle main center>
        Hola Amigos... It's me <br /> Swastik Supakar
      </SectionTitle>
        <SectionText className="about">
          <SectionImage>
          <img src="/images/profile.jpeg" height="65%" width="73%" style={{borderRadius: "100%"}} />
          </SectionImage>
        An undergrad sports, music, movies and games lover studying engineering and hoping to get a job.
        </SectionText>
        <SectionText1><a href="https://drive.google.com/drive/folders/1vs5TZzgFMC28uOXth4_LVBDYtYRZE0tD?usp=sharing" target="_blank"> Click here to view my Resumé </a></SectionText1>
        <br /> <br />
    </LeftSection>
  </Section>
);

export default Hero;