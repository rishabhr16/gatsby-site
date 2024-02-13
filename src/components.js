import styled from "styled-components";
import "@fontsource/roboto-mono";

const colors = {
  black: "#3b3c37",
  grey: "#545450",
  white: "#FFFAF0",
};

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  height: calc(100vh - 100px);
  font-family: "Roboto Mono", monospace;
  color: ${colors.black};
  padding: 50px;
  @media only screen and (max-width: 750px) {
    align-items: flex-start;
    padding: 50px 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 280px;
  border: 3px ${colors.black} solid;
  box-shadow: 5px 5px 0px 0px ${colors.grey};
  padding: 20px 100px;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 750px) {
    padding: 20px 10px;
  }
  @media only screen and (max-width: 550px) {
    position: static;
  }
`;

export const Text = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
  ${(props) => (props.marginBot ? `margin-bottom: ${props.marginBot}` : "")};
  text-transform: uppercase;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  min-width: 500px;
  @media only screen and (max-width: 550px) {
    min-width: 0px;
  }
`;

export const LinkWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const LinkContainer = styled.div`
  width: 100px;
  margin: 10px;
`;

export const Link = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 2px solid ${colors.black};
  color: ${colors.black};
  background: linear-gradient(to left, transparent 50%, #bef264 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease;
  &:hover {
    background-position: left bottom;
  }
`;

export const Image = styled.img`
  width: 100px;
  position: absolute;
  right: 0px;
  cursor: ${(props) => (props.pointer ? "pointer" : "auto")};
  ${(props) => (props.top || props.top === 0 ? `top: ${props.top}px` : "")};
  ${(props) =>
    props.show && !props.flip
      ? "transform: translate3d(0px, 0, 0)"
      : "transform: translate3d(100px, 0, 0)"};
  transition: transform 4s ease;
`;

export const ImageFlipped = styled(Image)`
  left: 0px;
  ${(props) =>
    props.show && props.flip
      ? "transform: translate3d(0px, 0, 0)"
      : "transform: translate3d(-100px, 0, 0)"};
  transition: transform 4s ease;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

export const Image404 = styled.img`
  width: 300px;
`;
