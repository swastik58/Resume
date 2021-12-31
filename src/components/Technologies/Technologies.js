import React from 'react';
import { DiReact, DiCode, DiWindows, DiLinux, DiHtml5, DiCss3, DiJavascript1, DiPython, DiUbuntu, DiHeroku, DiVisualstudio, DiAndroid, DiChrome, DiDropbox, DiFirebase, DiFirefox, DiGithubBadge, DiGoogleCloudPlatform, } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiFillMacCommand } from "react-icons/ai";


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with varieties of languages.
      I have not done any Back-end developement till date but looking forward to learn it.
    </SectionText>
    <List>
      <ListItem>
        <div>
        <DiReact size='3rem'/> <DiHtml5 size='3rem' /> <DiCss3 size='3rem' /> <DiJavascript1 size='3rem' /> 
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript, React.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
        <DiWindows size='3rem'/><DiLinux size='3rem'/> <DiUbuntu size='3rem' /> <AiFillMacCommand size='3rem' />
        </div>
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>
            Experience with <br />
            Windows, LINUX, Git/Github, MacOS, Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
        <DiCode size='3rem'/> <DiPython size='3rem' /> <DiVisualstudio size='3rem' /> <DiHeroku size='3rem' />
        </div>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C, C++, Latex, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
        <DiAndroid size='3rem'/> <DiChrome size='3rem' /> <DiDropbox size='3rem' /> <DiFirebase size='3rem' /> <DiFirefox size='3rem' /> <DiGithubBadge size='3rem' /> <DiGoogleCloudPlatform size='3rem' />
        </div>
        <ListContainer>
          <ListTitle>Other technologies used</ListTitle> 
          <ListParagraph>
            Experience with <br />
            Android, Chrome, Firebase, Github, Google Cloud Platform
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
