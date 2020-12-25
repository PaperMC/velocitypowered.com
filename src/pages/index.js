import React from "react"
import styled from "@emotion/styled"
import MainPageButton from "../components/main-page-button";

import stylingGlobals from "../styles/styling-globals";

import SEO from "../components/seo";
import {FiBook, FiDownload} from "react-icons/fi";

const Jumbotron = styled.div`
  background: var(--jumbotron);
  display: flex;
  padding: 2rem 5rem;
  flex-direction: column;
  
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
  flex-direction: column;
`

const ExplainerSection = styled.section`
  margin: 1rem;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    width: auto;
  }
`

const ExplainerTidbit = styled.div`
  margin: 2rem 0;
`

const ButtonSection = styled.div`
  display: flex;
  margin: 1.5rem 0;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    flex-direction: column;
    margin: 0;
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
    margin: auto 2rem auto 0;
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
            <p>The modern, next-generation Minecraft server proxy.</p>
            <ButtonSection>
              <MainPageButton icon={<FiDownload size={"32px"}/>} title={"Download Now"} link={"/downloads"} />
              <MainPageButton icon={<FiBook size={"32px"}/>} title={"Learn More"} link={"/wiki"} />
            </ButtonSection>
          </div>
        </JumbotronLogo>
      </Jumbotron>
      <Explainer>
        <ExplainerSection>
          <ExplainerTidbit>
            <h2>Meet Velocity.</h2>
            <p>
              Velocity is a next-generation Minecraft proxy focused on scalability and flexibility. It allows server owners to link together multiple Minecraft servers so they may appear as one.
            </p>
          </ExplainerTidbit>

          <ExplainerTidbit>
            <h2>Blazing fast, extensible, and secure &mdash; choose three.</h2>
            <p>
              Velocity is blazing fast. Fast logins, fast server switches, optimizations to get the most from your server's hardware, and a focus on security means you can finally have plugins, a highly optimized proxy resilient to attacks, and protection against your backend servers being accessed by malicious users &mdash; no compromises required.
            </p>
          </ExplainerTidbit>

          <ExplainerTidbit>
            <h2>Always there for you.</h2>
            <p>
              Velocity powers some of the world's largest Minecraft networks along with numerous small networks. Velocity can scale to thousands of players per proxy instance. Best of all, it works with Paper, Sponge, Forge, Fabric, and all versions of Minecraft from 1.7.2 to 1.16.4.
            </p>
          </ExplainerTidbit>
        </ExplainerSection>
      </Explainer>
    </>
  )
}
