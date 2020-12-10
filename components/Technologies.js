import styled from "styled-components";
import { Header } from "./Header";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 32px 68px;
`;

const Cards = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
`;

const Card = styled.li`
  width: 100px;
  height: 110px;
  margin: 5px 5px 32px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 75%;
  position: relative;
  &::after {
    content: "${(props) => props.title}";
    text-align: center;
    width: 100%;
    font-weight: 700;
    position: absolute;
    bottom: 0;
  }
`;

export const Technologies = () => {
  return (
    <Wrapper>
      <Header title="Technologie" />
      <Cards>
        <Card title="HTML" src="/technologies/html-file.svg" />
        <Card title="CSS" src="/technologies/css-file.svg" />
        <Card title="JAVASCRIPT" src="/technologies/js-file.svg" />
        <Card title="REACT" src="/technologies/react.svg" />
        <Card title="RWD" src="/technologies/responsive.svg" />
        <Card title="GRAPHQL" src="/technologies/graphql.svg" />
        <Card title="WORDPRESS" src="/technologies/wordpress.svg" />
        <Card title="GIT" src="/technologies/git.svg" />
        <Card title="SASS" src="/technologies/sass.svg" />
        <Card title="NEXTJS" src="/technologies/nextjs.svg" />
      </Cards>
    </Wrapper>
  );
};
