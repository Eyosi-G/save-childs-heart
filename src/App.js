import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import background from "./assets/images/background-image.jpg";
import styled from "styled-components";
const PRIMARY_COLOR = "#E6AA35";
const Container = styled.div`
  min-height: 100vh;
  position: relative;
  color: #ffffff;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    z-index: -1;
    transform: rotateY(180deg);
  }
`;

const MainSection = styled.div`
  min-height: 80vh;
  padding-top: 100px;
  h1,
  p,
  button {
    margin: 10px 20px;
  }
  h1 {
    font-size: 50px;
    text-transform: uppercase;
  }
  p {
    width: 40%;
    letter-spacing: 0.1em;
    font-weight: 200;
    text-align: justify;
    margin-top: 20px;
  }
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled.button`
  width: 20%;
  min-width: 200px;
  background-color: ${PRIMARY_COLOR};
  border-radius: 20px;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
  border: none;
  padding: 10px 20px;
`;
const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Spacer = styled.div`
  flex-grow: 2;
`;

const LeftLine = styled.div`
  width: 1%;
  border-bottom: 1px solid;
`;
const RightLine = styled.div`
  border-bottom: 1px solid;
  flex-grow: 2;
`;
const IconWrapper = styled.div`
 margin: 10px;
`;
const ProgressSection = styled.div`
  min-height: 20vh;
  background-color: ${PRIMARY_COLOR};
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 25px;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin: 10px 20px;
  }

`;
const ProgressBar = styled.div`
  width: 40%;
  height: 10px;
  background-color: rgba(0,0,0,.3);
  position: relative;
  border-radius: 20px;
  margin: 10px 20px;
  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 60%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #000000;
    border-radius: inherit;
  }

`;
const Range = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 10px 20px;
  p {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .1em;
  }
`;


const App = () => {
  return (
    <Container>
      <MainSection>
        <h1>
          Save a <br /> child's heart
        </h1>
        <p>
          Laborum dolore mollit est consectetur minim incididunt laboris velit
          cillum enim excepteur fugiat incididunt.
        </p>
        <StyledButton>donate now</StyledButton>
        <Spacer/>
        <SocialMediaContainer>
          <LeftLine />
          <IconWrapper>
            <TwitterIcon />
          </IconWrapper>
          <IconWrapper>
            <InstagramIcon />
          </IconWrapper>
          <RightLine />
        </SocialMediaContainer>
      </MainSection>
      <ProgressSection>
        <h1>Total Collection</h1>
        <ProgressBar/>
        <Range>
          <p>Collection 5000 ETB</p>
          <p>goal 8000 ETB</p>
        </Range>
      </ProgressSection>
    </Container>
  );
};

export default App;
