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
  padding: 100px 32px;
`;

const SiteCardWrapper = styled.div`
  width: 325px;
  height: 500px;
  padding-bottom: 56px;
  @media (max-width: 714px) {
    width: 100%;
    height: auto;
  }
  border: 4px solid #fff;
  position: relative;
  @media (max-width: 1038px) {
    margin: 0 0 32px 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  img {
    width: 100%;
    height: auto;
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
        date="W BUDOWIE"
        description="Strona informacyjna dla prafian z miejscowości Droszków, Przytok oraz Jany."
      />
      <SiteCard
        img="gminfo.png"
        title="Gmina Zabór INFO"
        src="https://gminazabor.info/droszkow/"
        srcGit="https://github.com/mtjako/GminaZaborINFO/"
        date="15/08/2020"
        description="Strona informacyjna dla mieszkańców gminy Zabór. Relacje ze spotkań i najważniejszych wydarzeń związanych z gminą Zabór. Unikatowe zdjęcia, wywiady oraz filmy."
      />
      <SiteCard
        img="zzs.png"
        title="Zielonogórscy Sybiracy"
        src="https://zielonogorscysybiracy.pl/"
        date="01/03/2020"
        description="Oficjalna strona Zielonogórskiego Związku Sybiraków. Strona stworzona w ramach współpracy technikum z Zielonogórskimi Sybirakami."
      />
    </Wrapper>
  );
};
