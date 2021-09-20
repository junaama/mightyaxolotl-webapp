import About from "../components/About";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";
import Accordion from "../components/Accordion";
import Story from "../components/Story";
import Sponsor from "../components/Sponsor";
import Head from "next/head";
export default function Index() {
  return (
    <>
      <Head>
        <title>Mighty Axolotl</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Mighty Axolotl is a 10K generative art collection focusing on creating awareness and impact."
        />
        <meta property="og:type" content="website" />
      </Head>
      <About />

      <Story />
      <hr />
      <Sponsor />
      <hr />
      <Roadmap />
      <hr />
      <Team />
      <hr />
      <Accordion />
      <hr />
    </>
  );
}
