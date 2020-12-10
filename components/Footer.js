import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-color: #111;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 64px 32px;
  p {
    width: 100%;
    text-align: center;
  }
`;

const IconList = styled.ul`
  display: flex;
  width: 100%;
  margin-bottom: 32px;
  justify-content: center;
  list-style-type: none;
`;

const Icon = styled.li`
  background-image: url(${(props) => props.src});
  width: 24px;
  height: 24px;
  margin: 0 12px;
`;

export const Footer = () => {
  return (
    <Background>
      <Wrapper>
        <IconList>
          <a
            target="_blank"
            href="https://www.facebook.com/mateusz.jakowlew.71/"
          >
            <Icon src="/bxl-facebook-square.svg" />
          </a>
          <a target="_blank" href="https://www.instagram.com/jakowlew.mateusz/">
            <Icon src="/bxl-instagram-alt.svg" />
          </a>
          <a target="_blank" href="https://github.com/mtjako">
            <Icon src="/bxl-github.svg" />
          </a>
          <a target="_blank" href="https://dribbble.com/mtjako">
            <Icon src="/bxl-dribbble.svg" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mateusz-jakowlew-3941b0201/"
          >
            <Icon src="/bxl-linkedin-square.svg" />
          </a>
        </IconList>
        <p>&copy; 2021 Jakowlew | All Rights Reserved</p>
      </Wrapper>
    </Background>
  );
};
