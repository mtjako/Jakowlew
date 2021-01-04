import { useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 32px 0;
`;

const SectionWrapper = styled.div`
  background-color: #191919;
  margin: 0 0 16px;
`;

const SectionTop = styled.div`
  background-color: #111;
  cursor: pointer;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    transition: 0.2s;
    transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(45deg)")};
    width: 28px;
    height: 28px;
  }
`;
const SectionContent = styled.ul`
  padding: 16px;
  display: ${(props) => (props.open ? "block" : "none")};
  list-style-type: none;
  width: 100%;
`;
const SectionApp = styled.li`
  margin: 0 0 16px;
  &:last-child {
    margin: 0;
  }
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    filter: grayscale(25%);
  }
`;

const Section = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <SectionWrapper>
      <SectionTop open={open} onClick={() => setOpen(!open)}>
        <h4>{props.title}</h4>
        <img src="bx-x.svg" />
      </SectionTop>
      <SectionContent open={open}>
        {props.content.map((app) => (
          <SectionApp key={app.title}>
            <img src={app.img} />
            <h4>{app.title}</h4>
          </SectionApp>
        ))}
      </SectionContent>
    </SectionWrapper>
  );
};

export const Software = () => {
  return (
    <Wrapper>
      <Header title="Software"/>
      <Section
        title="OS"
        content={[
          {
            title: "macOS Big Sur",
            img: "/apps/bigsur.png",
          },
        ]}
      />
      <Section
        title="WEB DEVELOPMENT"
        content={[
          {
            title: "Visual Studio Code",
            img: "/apps/vscode.png",
          },
          {
            title: "Google Chrome",
            img: "/apps/chrome.png",
          },
          {
            title: "Transmit",
            img: "/apps/transmit.png",
          },
          {
            title: "Terminal",
            img: "/apps/terminal.png",
          },
          {
            title: "Docker (w trakcie nauki)",
            img: "/apps/docker.png",
          },
        ]}
      />
      <Section
        title="UI/UX"
        content={[
          {
            title: "Sketch",
            img: "/apps/sketch.png",
          },
          {
            title: "Adobe XD",
            img: "/apps/xd.png",
          },
        ]}
      />
      <Section
        title="DTP"
        content={[
          {
            title: "Affinity Photo",
            img: "/apps/afphoto.png",
          },
          {
            title: "Affinity Designer",
            img: "/apps/afdesign.png",
          },
          {
            title: "Affinity Publisher",
            img: "/apps/afpub.png",
          },
          {
            title: "Adobe Photoshop",
            img: "/apps/photoshop.png",
          },
          {
            title: "Adobe Illustrator",
            img: "/apps/illustrator.png",
          },
          {
            title: "Adobe InDesign",
            img: "/apps/indesign.png",
          },
          {
            title: "Adobe Lightroom (w trakcie nauki)",
            img: "/apps/lightroom.png",
          },
        ]}
      />

      <Section
        title="FILM EDITING"
        content={[
          {
            title: "Final Cut Pro (w trakcie nauki)",
            img: "/apps/fcpx.png",
          },
          {
            title: "Motion (w trakcie nauki)",
            img: "/apps/motion.png",
          },
          {
            title: "Compressor (w trakcie nauki)",
            img: "/apps/compressor.png",
          },
        ]}
      />
    </Wrapper>
  );
};
