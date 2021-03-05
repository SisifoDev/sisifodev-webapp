import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import PurchaseButton from "../buttons/PurchaseButton";
import MockupAnimation from "../animations/MockupAnimation";
import WaveBackground from "../backgrounds/WaveBackground";

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br /> and code React apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton
            title="Start Learning Now"
            subtitle="120+ Hours of video"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const animation = keyframes`
0% {opacity: 0; }

100% {opacity: 1; }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
`;

const Description = styled(MediumText)``;
