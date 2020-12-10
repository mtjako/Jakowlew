import Head from "next/head";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Portfolio } from "../components/Portfolio";
import { Software } from "../components/Software";
import { Technologies } from "../components/Technologies";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mateusz Jakowlew</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Hero />
      <Cards/>
      <Technologies />
      <Software />
      <Portfolio />
      <Footer />
    </div>
  );
}
