import React from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { SiSteam } from "react-icons/si";
import { FaTwitch, FaMusic, FaSpotify } from "react-icons/fa";
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialIconsContainer, LinkColumn1 } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call / WhatsApp</LinkTitle>
          <LinkItem href="tel:7602508521">7602508521</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:6296685479">6296685479</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:swastiksupakar19@gmail.com">swastiksupakar19@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <br />
      <LinkColumn1 main center>Find me on the Internet</LinkColumn1>
      <SocialIconsContainer>
      <SocialIcons href="https://twitter.com/SwastikSupakar" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/swastik.supakar.58/" target="_blank">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/a_wave_with_0_amplitude/?hl=en" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://steamcommunity.com/id/swastiksupakar/" target="_blank">
        <SiSteam size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.twitch.tv/xcavator58" target="_blank">
        <FaTwitch size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://music.youtube.com/playlist?list=PL45RgptZ6BODZbdTF3cQmgWf4oZK1_lh4&feature=share" target="_blank">
        <FaMusic size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://open.spotify.com/user/4h0tl3w6vz5333qsdr1zbhtox" target="_blank">
        <FaSpotify size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
