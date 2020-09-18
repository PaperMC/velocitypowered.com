import React from "react"
import Layout from "../components/layout";
import styled from "@emotion/styled"
import { FiAtSign } from "react-icons/fi";

import stylingGlobals from "../styles/styling-globals";

import mineteriaLogo from "../assets/img/sponsors/mineteria.png";
import voldexLogo from "../assets/img/sponsors/voldex.png";
import SEO from "../components/seo";

const SponsorJumbotron = styled.div`
  background: ${({ theme }) => theme.colors.jumbotron};
  width: 100%;
  padding: 1rem 0;
  padding-bottom: 2rem;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    padding: 1rem 0;
  }
`

const SponsorJumbotronHeader = styled.h1`
  text-align: center;
`

const SponsorsStart = styled.section`
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
  
  @media (max-width: ${stylingGlobals.viewportSizes.desktop}) {
    flex-direction: column;
    text-align: center;
    
    img {
      max-width: 70vw;
    }
  }
`

const Sponsor = styled.aside`
  text-align: center;
  margin-right: 2rem;
  
  @media (max-width: ${stylingGlobals.viewportSizes.desktop}) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

const Why = styled.section`
  width: 80%;
  margin: 2rem auto 3rem auto;
`

export default function Sponsors({ location }) {
  return (
    <Layout jumbotron location={location}>
      <SEO title="Our Sponsors" />
      <SponsorJumbotron>
        <SponsorJumbotronHeader>Our Sponsors</SponsorJumbotronHeader>
        <SponsorsStart>
          <Sponsor>
            <a href={"https://mineteria.com"}>
              <img src={mineteriaLogo} alt={"Mineteria"} />
            </a>
          </Sponsor>
          <Sponsor>
            <a href={"https://voldex.net"}>
              <img src={voldexLogo} alt={"Voldex Services, Inc."} />
            </a>
          </Sponsor>
        </SponsorsStart>
      </SponsorJumbotron>

      <Why>
        <h2>Why do you have sponsors?</h2>

        <p>
          Velocity started as a project of passion for a while, but with growing awareness and usage it is time for us to
          grow and get on a more stable financial footing. Because of this, we have sought and received sponsorships from
          servers that use Velocity and wish to contribute to the ongoing development of the project.
        </p>

        <p>
          Velocity <strong>will always remain open source</strong> - but we need help to allow us to keep developing
          Velocity. We have not lost focus of what we are focusing on. Our sponsors help make Velocity stronger and are
          strongly vested in its success.
        </p>

        <h2>Who are the sponsors, exactly, and what are they providing?</h2>

        <p>
          The main thing we ask of our sponsors is that they must be <strong>strongly committed</strong> to the success
          of the Velocity project.
        </p>

        <h3>Mineteria</h3>

        <p>
          <strong>Mineteria</strong> is the social Minecraft network with minigames and housing. Mineteria has been
          using Velocity in production since its early days - in fact, since <strong>November 2018</strong>, just a few
          months after the project started. Their support and embrace of Velocity helped us move towards our very first
          stable release (1.0.0) in June 2019.
        </p>

        <p>
          Mineteria has kindly provided us with the opportunity to test new Velocity features using a real-world test
          and production environment. In addition, by employing one of the Velocity developers (Andrew/Tux), they allow
          him to work on Velocity at least part-time.
        </p>

        <h3>Voldex Services</h3>

        <p>
          <strong>Voldex Services</strong> is the operator of Minecraft networks such as TheArchon and PrimeMC.
          Voldex Services kindly pays for all the infrastructure hosting Velocity's project services, such as our
          forums and Jenkins instance, hosted on DigitalOcean.
        </p>

        <h2>Want to sponsor Velocity?</h2>

        <p>
          We welcome sponsorship offers from others. All sponsorship offers will be carefully considered, but only those
          we judge as beneficial to the project and whom we believe are strongly committed to the success of Velocity will
          be accepted. In essence, <strong>the onus is on you</strong> to prove your sponsorship will help us.
        </p>

        <p>
          If you think you meet our requirements and would like to be considered, email velocity<FiAtSign />steinborn.me.
          Tell us who you are, and how you can assist the project (whether that is by providing resources or monetary
          contributions).
        </p>
      </Why>
    </Layout>
  )
}