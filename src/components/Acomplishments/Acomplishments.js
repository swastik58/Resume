import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '2nd', text: 'Runners-up in Inter College CS:GO tournament'},
  { number: '1st', text: 'Winners in Orchestra Competition', },
  { number: '1st', text: 'Winners in Inter District Cricket Tournament', },
  { number: '1st', text: 'Winners in 4x100m Relay Race Competition', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br /> <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
