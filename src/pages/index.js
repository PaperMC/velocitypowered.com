import React from "react"
import {Link} from "gatsby";
import styled from "@emotion/styled"
import FullWidthButton from "../components/full-width-button";

import stylingGlobals from "../styles/styling-globals";

import SEO from "../components/seo";

const Jumbotron = styled.div`
  background: var(--jumbotron);
  display: flex;
  padding: 2rem 5rem;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    padding: 1rem;
  }
`

const JumbotronLogo = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  text-align: left;
  
  h1 {
    font-size: 3.25rem;
    margin-bottom: 0;
  }
  
  p {
    margin-top: 0;
    font-size: 1.25rem;
  }
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    flex-direction: column;
    text-align: center;
    
    h1 {
      margin: 0;
    }
  }
`

const Explainer = styled.main`
  display: flex;
  width: 95%;
  margin: 0 auto;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    flex-direction: column;
  }
`

const ExplainerSection = styled.section`
  width: 50%;
  margin: 1rem;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    width: auto;
  }
`

const VelocityLogo = styled.div`
  display: none;
  
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    display: block;
    width: 200px;
    height: 200px;
    background-image: var(--jumbotron-logo-url);
    background-size: cover;
    margin-right: 2rem;
  }
`

export default function Home() {
  return (
    <>
      <SEO title="Welcome to Velocity" />
      <Jumbotron>
        <JumbotronLogo>
          <VelocityLogo />
          <div>
            <h1>Velocity</h1>
            <p>The ridiculously scalable, flexible Minecraft proxy.</p>
          </div>
        </JumbotronLogo>
      </Jumbotron>
      <Explainer>
        <ExplainerSection>
          <h2>Why use Velocity?</h2>
          <p>
            Velocity is the next-generation Minecraft proxy focused on scalability and flexibility. It allows server
            owners to link together multiple Minecraft servers so they may appear as one.
          </p>
          <p>
            <strong>Velocity is an independently-developed code base, and is not a fork or a reimplementation of BungeeCord</strong>.
            There are many similarities but also many differences. You may find this article on our technical wiki to be useful reading.
          </p>
          <p>Velocity is:</p>
          <ul>
            <li>
              <strong>fast</strong> - featuring the industry's fastest server switching speed, often completing in the
              blink of an eye (that's under 400 milliseconds)
            </li>
            <li>
              <strong>reliable</strong> - used by several large Minecraft networks
            </li>
            <li>
              <strong>scalable</strong> - takes full advantage of modern-day CPUs with multiple cores
            </li>
            <li>
              <strong>highly compatible</strong> - works with Paper, Sponge, Forge, Fabric, and all versions of Minecraft
              from 1.7.2 to 1.16.3
            </li>
            <li>
              <strong>free</strong> - forever, developed as open source software with the support of <Link to={"/sponsors"}>our sponsors</Link>
            </li>
          </ul>
        </ExplainerSection>
        <ExplainerSection>
          <FullWidthButton title={"Documentation"} subtitle={"Learn how to configure and effectively set up" +
          " Velocity. Fully revamped."} link={"/wiki"} />
          <FullWidthButton title={"GitHub"} subtitle={"Look at the Velocity source code, report bugs, and contribute" +
          " to the project."} link={"https://github.com/velocitypowered/Velocity"} />
          <FullWidthButton title={"Forums"} subtitle={"Talk about Velocity and discover plugins developed for" +
          " Velocity."} link={"https://forums.velocitypowered.com"} />
          <FullWidthButton title={"Discord"} subtitle={"Join 600 others on Discord to talk about Velocity and ask" +
          " questions."} link={"https://discord.gg/8cB9Bgf"}/>
        </ExplainerSection>
      </Explainer>
    </>
  )
}
