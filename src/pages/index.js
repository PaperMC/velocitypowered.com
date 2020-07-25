import React from "react"
import {Link} from "gatsby";
import styled from "@emotion/styled"
import Layout from "../components/layout";
import FullWidthButton from "../components/full-width-button";
import theme from '../styles/theme';

import velocityWhite from '../assets/img/velocity-white.png';
import velocityBlue from '../assets/img/velocity-blue.png';
import SEO from "../components/seo";

const Jumbotron = styled.div`
  background: ${theme.colors.jumbotron};
  display: flex;
  padding: 2rem 5rem;
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
`

const Explainer = styled.section`
  display: flex;
  width: 95%;
  margin: 0 auto;
`

const ExplainerSection = styled.section`
  width: 50%;
  margin: 1rem;
`

const VelocityLogo = styled.img`margin-right: 2rem`

function getLogoShown() {
  return theme.logoVariant === 'blue' ? velocityBlue : velocityWhite
}

export default function Home() {
  return (
    <Layout jumbotron>
      <SEO title="Welcome to Velocity" />
      <Jumbotron>
        <JumbotronLogo>
          <VelocityLogo src={getLogoShown()} alt={"Velocity"} height={"200px"} width={"200px"}/>
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
              from 1.7.2 to 1.16.1
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
    </Layout>
  )
}
