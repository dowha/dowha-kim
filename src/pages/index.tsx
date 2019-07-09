import * as React from "react";
import Helmet from "react-helmet";

import { Intro } from "components/intro/Intro";
import { Highlight } from "components/intro/Highlight";
import { BlockText } from "components/block-text/BlockText";
import { Button } from "components/button/Button";

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Hi👋 I'm Dowha, a communications officer who believes positive effects of
      internet technology. Have great passion in{" "}
      <Highlight>LGBTI right</Highlight> and{" "}
      <Highlight>Gender Equality</Highlight>. <br />I love to be creative with{" "}
      <Highlight>Adobe Illustrator</Highlight>, <Highlight>HTML/CSS</Highlight>,{" "}
      <Highlight>Javascript</Highlight>, <Highlight>Gatsby</Highlight>, and{" "}
      <Highlight>Notion</Highlight>.
      <br />
      <br />
      <Button to="https://dowha.kim">Blog</Button>
      <Button to="https://bit.ly/dowha-portfolio">Portfolio</Button>
    </Intro>

    <BlockText
      heading="Please send me an email if you have any inquiries👇"
      description={
        <>
          <a
            href="mailto:dowha.kim@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dowha.kim [at] outlook.com
          </a>
        </>
      }
    />
  </>
);
