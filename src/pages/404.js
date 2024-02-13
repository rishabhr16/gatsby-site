import React from "react";
import { Flex, Image404 } from "../components";
import cat from "../images/404-cat.jpg";

export default function NotFound() {
  return (
    <Flex>
      <Image404 src={cat} alt="404 cat" />
    </Flex>
  );
}
