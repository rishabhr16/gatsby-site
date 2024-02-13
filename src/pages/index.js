import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useResizeDetector } from "react-resize-detector";
import {
  Main,
  Card,
  Text,
  Details,
  LinkWrapper,
  LinkContainer,
  Link,
  Image,
  ImageFlipped,
} from "../components";
import cat from "../images/peeking-cat-min.png";
import catFlip from "../images/peeking-cat-flip-min.png";

const jobTitle = "Tech Lead";

const textArray = [
  "laughing at cat memes",
  "building awesome things",
  "watching a movie",
];
const getRandomText = () => {
  const currentHour = new Date().getUTCHours();
  if (currentHour >= 19 || currentHour <= 4) {
    return "sleeping";
  }
  return textArray[Math.floor(Math.random() * textArray.length)];
};
const randomText = "Right now, I'm probably " + getRandomText();

function App() {
  const { height: cardHeight, ref: cardRef } = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 500,
  });

  const [top, setTop] = useState(0);
  const [flip, setFlip] = useState(false);
  const [disableClick, setDisableClick] = useState(false);
  const [show, setShow] = useState(true);

  const getRandomTop = () => {
    const min = 0;
    const max = Math.floor(cardHeight - 112);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const setRandomImageprops = () => {
    if (!disableClick) {
      setDisableClick(true);
      const top = getRandomTop();
      handleShow();
      setTimeout(() => {
        setFlip((flip) => !flip);
        setTop(top);
        handleShow();
        setDisableClick(false);
      }, 4000);
    }
  };

  const handleShow = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <Helmet>
        {/* <!-- COMMON TAGS --> */}
        <meta charset="utf-8" />
        <title>Rishabh Rao</title>
        {/* <!-- Search Engine --> */}
        <meta
          name="description"
          content="Rishabh Rao is a software developer with five years of experience in architecting and maintatining highly scalable applications"
        />
        <meta
          name="image"
          content="https://www.rishabhrao.com/static/media/peeking-cat-min.cd7d4ea2.png"
        />
        {/* <!-- Schema.org for Google -- /> */}
        <meta itemprop="name" content="Rishabh Rao" />
        <meta
          itemprop="description"
          content="Rishabh Rao is a software developer with five years of experience in architecting and maintatining highly scalable applications"
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
          content="Rishabh Rao is a software developer with five years of experience in architecting and maintatining highly scalable applications"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) -- /> */}
        <meta name="og:title" content="Rishabh Rao" />
        <meta
          name="og:description"
          content="Rishabh Rao is a software developer with five years of experience in architecting and maintatining highly scalable applications"
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
        <meta property="twitter:title" content={"Rishabh Rao | " + jobTitle} />
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
        <Card ref={cardRef}>
          <Text fontSize={"1.7em"}>Rishabh Rao</Text>
          <Text fontSize={"2.5em"}>I do stuff</Text>
          <Text fontSize={"1em"} marginBot={"20px"}>
            (Mostly software development)
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
            <Image
              src={cat}
              alt="cat"
              top={top}
              flip={flip}
              show={show}
              pointer={!disableClick}
              onClick={setRandomImageprops}
            />
            <ImageFlipped
              src={catFlip}
              alt="cat"
              top={top}
              flip={flip}
              show={show}
              pointer={!disableClick}
              onClick={setRandomImageprops}
            />
            {/* <Image src={cat} alt="cat" /> */}
          </Details>
        </Card>
      </Main>
    </>
  );
}

export default App;
