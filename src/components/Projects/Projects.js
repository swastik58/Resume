import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <br /> <br />
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent title>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TitleContent>Build Using :</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag} </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target="_blank">Visit the Website</ExternalLinks>
            <ExternalLinks href={source} target="_blank">Code from GitHub</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <HeaderThree>For more projects, visit my <a href="https://github.com/swastik58?tab=repositories" target="_blank">GitHub Repositories page </a>. </HeaderThree>
    <br />
  </Section>
);

export default Projects;