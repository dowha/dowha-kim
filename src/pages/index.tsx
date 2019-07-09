import * as React from "react";
import Helmet from "react-helmet";

import { Intro } from "components/intro/Intro";
import { Highlight } from "components/intro/Highlight";
import { BlockText } from "components/block-text/BlockText";
import { Button } from "components/button/Button";
import { Segment } from "components/segment/Segment";

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Hi👋 I'm Dowha, a Communications officer based in Bangkok, Thailand.{" "}
      <Highlight>TypeScript</Highlight>,&nbsp;
      <Highlight>SCSS</Highlight>, <Highlight>CSS Modules</Highlight>,{" "}
      <Highlight>React Hooks</Highlight>,&nbsp;
      <Highlight>root resolver</Highlight>,{" "}
      <Highlight>code splitting</Highlight> and a lot of love.
    </Intro>

    <Segment>
      <Button to="https://dowha.kim">Blog</Button>
      <Button to="https://bit-ly/dowha-portfolio">Portfolio</Button>
    </Segment>

    <BlockText
      heading="Come visit my blog and portfolio page"
      description={<> </>}
    />
  </>
);
