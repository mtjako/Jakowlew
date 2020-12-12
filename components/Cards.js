import { Children } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 32px 0;
`;

export const Cards = () => (
  <Wrapper>
    <Header title="O mnie" />
    <Card
      title="O mnie"
      image="/student.svg"
      content="Minimalista, miłośnik nowych technologii oraz astronomii, w gminazjum złapał bakcyla do multimediów. Od tego czasu tworzy grafiki, plakaty, filmy, teksty, a obecnie głównie strony internetowe. Swój talent wykorzystuje w życiu loklanej społeczności dla której prowadzi internetową stronę informacyjną."
    />
    <Card
      title="Technik cyfrowych procesów graficznych"
      image="/design.svg"
      content="W technikum nabył wiedzę z podstaw projektowania graficznego, drukowania cyfrowego oraz wykonywania i realizacji projektów multimedialnych. W tym czasie również odbył staż w lokalnej drukarni gdzie nabył wiedzę praktyczną z przygotowania meteriałów graficznych do procesu drukowania."
    />
    <Card
      title="Frontend Developer"
      image="/data.svg"
      content="Z pozytywnym wynikiem ukończył kurs 'JavaScript Developer: React' w szkole IT CodersLab we Wrocławiu, który obejmował zakres wiedzy wymagany na stanowisku Junior Frontend Developer. Po kursie nauczył się również frameworka Next.js oraz tworzyć headlessowe strony na Wordpressie przy użyciu GraphQL."
    />
    <Card
      title="Świadectwo kwalifikacji VLOS"
      image="/drone.svg"
      content="Posiada podstawowe uprawnienie do wykonywania lotów dronem w zasięgu wzroku (VLOS), oraz dodatkowe na kategorię statku powietrznego do 5 kg. Swoje loty wykonuje wielowirnikowcem DJI Mavic Air 2, obróbkę zdjęć wykonuje w programie Affinity Photo, a montaż video w Final Cut Pro."
    />
    <Card
      title="Rada sołecka oraz stowarzyszenia"
      image="/teamwork.svg"
      content="Od 2 lat aktywnie działa w radzie sołeckiej swojej miejscowości, z którą wspólnie działa na rzecz mieszkańców i rozwoju regionu. Należy również do lokalnego stowarzyszenia które pisze projekty na różne inicjatywy dla mieszkańców miejscowości oraz promocji regionu i Lubuskiego Szlaku Wina i Miodu."
    />
  </Wrapper>
);
