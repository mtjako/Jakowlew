import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 800px;
  @media(max-width: 425px){
    height: 100vh;
    }
  background-color: #111;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  @media(max-width: 425px){
    align-items: flex-start;
    padding-top: 32px;
    }
`;

const Image = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 725px;
  max-width: 1200px;
  margin: 75px auto 0;
  background-image: url("/profile.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
`;

const Header = styled.div`
  position: absolute;
  z-index: 2;
  color: #fff;
  padding: 0 32px;

  h1 {
    font-size: 70px;
    @media(max-width: 425px){
      font-size: 50px;
    }
    margin: 16px 0;
  }
  h3 {
    font-size: 22px;
  }
`;

export const Hero = () => {
  return (
    <Background>
      <Wrapper>
        <Header>
          <h1>Mateusz Jakowlew</h1>
          <h3>Junior Frontend Developer</h3>
        </Header>
        <Image />
      </Wrapper>
    </Background>
  );
};
