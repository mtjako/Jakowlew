import styled from "styled-components";
import { Header } from "./Header";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1038px) {
    justify-content: space-around;
  }
  align-items: center;
  padding: 100px 32px 0;
`;

const SiteCardWrapper = styled.div`
  width: 325px;
  height: 450px;
  padding-bottom: 56px;
  @media (max-width: 714px) {
    width: 100%;
    height: auto;
  }
  border: 4px solid #fff;
  position: relative;
  margin: 0 0 32px 0;
  img {
    width: 100%;
    height: auto;
    max-height: 210px;
    object-fit: cover;
    filter: grayscale(25%);
  }
  h3 {
    padding: 16px;
  }
  p {
    padding: 0 16px;
  }
  div {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    padding: 16px;
    & > span {
      display: flex;
    }
    a {
      margin-right: 8px;
      display: block;
      width: 24px;
      height: 24px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const SiteCard = (props) => (
  <SiteCardWrapper>
    <img src={props.img} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <div>
      <span>
        {props.src ? (
          <a target="_blank" href={props.src}>
            <img src="bx-world.svg" />
          </a>
        ) : null}
        {props.srcGit ? (
          <a target="_blank" href={props.srcGit}>
            <img src="bxl-github.svg" />
          </a>
        ) : null}
      </span>
      <span>{props.date}</span>
    </div>
  </SiteCardWrapper>
);

export const Portfolio = () => {
  return (
    <Wrapper>
      <Header title="Portfolio" />
      <SiteCard
        img="pp.png"
        title="Parafia Przytok"
        srcGit="https://github.com/mtjako/ParafiaPrzytok/"
        date="01/02/2021"
        description="Strona informacyjna dla Parafii Wniebowzięcia Najświętszej Maryi Panny w Przytoku"
      />
      <SiteCard
        img="gminfo.png"
        title="Gmina Zabór INFO"
        src="https://gminazabor.info/droszkow/"
        srcGit="https://github.com/mtjako/GminaZaborINFO/"
        date="15/08/2020"
        description="Strona informacyjna dla mieszkańców Gminy Zabór"
      />
      <SiteCard
        img="zzs.png"
        title="Zielonogórscy Sybiracy"
        src="https://zielonogorscysybiracy.pl/"
        date="01/03/2020"
        description="Oficjalna strona Zielonogórskiego Związku Sybiraków"
      />
      <SiteCard
        img="sprzatanie.jpg"
        title="Sprzątanie Droszkowa"
        src="https://jakowlew.pl/sprzatanie.jpg"
        date="07/03/2020"
        description="Plakat na akcję sprzątania Droszkowa organizowaną przez sołectwo"
      />
      <SiteCard
        img="kobelka.jpg"
        title="Droszkowski Belweder"
        src="https://jakowlew.pl/kobelka.jpg"
        date="09/09/2020"
        description="Plakat na występ teatralny organizowany przez SMD"
      />
            <SiteCard
        img="youtube.jpg"
        title="Gmina Zabór Rękodzielnictwem Słynie"
        src="https://youtu.be/moUKXjmtKsA"
        date="01/12/2020"
        description="Film promujący rzeźbiarstwo w Gminie Zabór"
      />
    </Wrapper>
  );
};
