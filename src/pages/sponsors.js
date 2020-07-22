import React from "react"
import Layout from "../components/layout";
import styled from "@emotion/styled"
import theme from '../styles/theme';

import mineteriaLogo from "../assets/img/sponsors/mineteria.png";
import voldexLogo from "../assets/img/sponsors/voldex.png";

const SponsorJumbotron = styled.div`
  background: ${theme.colors.jumbotron};
  width: 100%;
  padding: 1rem 0;
  padding-bottom: 2rem;
`

const SponsorJumbotronHeader = styled.h1`
  text-align: center;
  font-size: 3.25rem;
  margin-bottom: 1.5rem;
`

const SponsorsStart = styled.section`
  display: flex;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`

const Sponsor = styled.aside`
  text-align: center;
  margin-right: 2rem;
`

const Why = styled.section`
  width: 95%;
  margin: 2rem auto;
`

export default function Sponsors() {
  return (
    <Layout>
      <SponsorJumbotron>
        <SponsorJumbotronHeader>Meet Our Sponsors</SponsorJumbotronHeader>
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
          Velocity is open source and will always remain open source. <strong>That will never change</strong> - but we
          need to rely on others to help keep funding the development of Velocity. We have not lost focus of what we are
          focusing on. Our sponsors help make Velocity stronger and are strongly vested in its success.
        </p>

        <h2>Who are the sponsors, exactly?</h2>

        <p>
          <strong>Mineteria</strong> is the social Minecraft network with minigames and housing. Mineteria has been
          using Velocity in production since its early days - in fact, since <strong>November 2018</strong>, just a few
          months after the project started. Their support and embrace of Velocity helped us move towards our very first
          stable release (1.0.0) in June 2019.
        </p>

        <p>
          <strong>Voldex Services</strong> is the operator of Minecraft networks such as TheArchon and PrimeMC.
        </p>

        <h2>Want to sponsor Velocity?</h2>

        <p>
          We welcome sponsorship offers from others, but we expect our sponsors to be vested in the success of the project,
        </p>
      </Why>
    </Layout>
  )
}