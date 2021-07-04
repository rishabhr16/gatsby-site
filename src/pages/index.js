import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Main,
  Card,
  Text,
  Details,
  LinkWrapper,
  LinkContainer,
  Link,
  Image,
} from "../components";
import cat from "../images/peeking-cat-min.png";

function App() {
  const textArray = [
    "laughing at cat memes",
    "laughing at cat memes",
    "building awesome things",
    "building awesome things",
    "building awesome things",
    "watching a movie",
    "sleeping",
  ];
  const [randomText] = useState(
    `Right now, I'm probably ${
      textArray[Math.floor(Math.random() * textArray.length)]
    }`
  );

  return (
    <>
      <Helmet>
        {/* <!-- COMMON TAGS --> */}
        <meta charset="utf-8" />
        <title>Rishabh Rao | Frontend Developer</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Rishabh Rao is a frontend developer with over 3 years of experience"
        />
        <meta
          name="image"
          content="https://www.rishabhrao.com/static/media/peeking-cat-min.cd7d4ea2.png"
        />
        {/* <!-- Schema.org for Google -- /> */}
        <meta itemprop="name" content="Rishabh Rao" />
        <meta
          itemprop="description"
          content="Rishabh Rao is a frontend developer with over 3 years of experience"
        />
        <meta
          itemprop="image"
          content="https://www.rishabhrao.com/static/media/peeking-cat-min.cd7d4ea2.png"
        />
        {/* <!-- Twitter -- /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rishabh Rao" />
        <meta
          name="twitter:description"
          content="Rishabh Rao is a frontend developer with over 3 years of experience"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) -- /> */}
        <meta name="og:title" content="Rishabh Rao" />
        <meta
          name="og:description"
          content="Rishabh Rao is a frontend developer with over 3 years of experience"
        />
        <meta
          name="og:image"
          content="https://www.rishabhrao.com/static/media/peeking-cat-min.cd7d4ea2.png"
        />
        <meta name="og:url" content="https://www.rishabhrao.com" />
        <meta name="og:site_name" content="Rishabh Rao's personal page" />
        <meta name="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* <!-- Twitter -- /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rishabhrao.com/" />
        <meta
          property="twitter:title"
          content="Rishabh Rao | Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="Rishabh Rao is a frontend developer with over three years of experience in building awesome UI"
        />
        <meta
          property="twitter:image"
          content="https://www.rishabhrao.com/static/media/peeking-cat-min.cd7d4ea2.png"
        />
      </Helmet>
      <Main>
        <Card>
          <Text fontSize={"1.7em"}>Rishabh Rao</Text>
          <Text fontSize={"2.5em"}>I do stuff</Text>
          <Text fontSize={"1em"} marginBot={"20px"}>
            (Mostly frontend development)
          </Text>
          <Text fontSize={"0.85em"}>{randomText}</Text>
          <Details>
            <LinkWrapper>
              <LinkContainer>
                <Link href="https://www.linkedin.com/in/rishabhrao/">
                  linkedin
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link href="https://github.com/rishabhr16">github</Link>
              </LinkContainer>
            </LinkWrapper>
            <Image src={cat} alt="cat" />
          </Details>
        </Card>
      </Main>
    </>
  );
}

export default App;
