import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;

    margin: 0 auto;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 2.0rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionImage = styled.div`
text-align: right;
position: relative;
padding-left: 10rem;
padding-right: 10rem;
border-radius: 50%;
`;

export const SectionText1 = styled.p`
  font-weight: 500;
  letter-spacing: 2px;
  color: #000000;
  padding: .5rem 0;
  font-size: 25px;
  text-align: center;

  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.0);
    cursor: pointer;
  }
`;