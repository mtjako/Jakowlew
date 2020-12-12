import styled from "styled-components";
import { Header } from "./Header";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 32px;
  p{
      font-size: 18px;
      margin-bottom: 10px;
      a{
          font-weight: 700;
      }
  }
`;


export const Contact = () => {
  return (
    <Wrapper>
      <Header title="Kontakt" />
      <p>Zapraszam do kontaktu</p>
      <p>Napisz do mnie na: <a href="mailto:mateusz@jakowlew.pl">mateusz@jakowlew.pl</a></p>
    </Wrapper>
  );
};
