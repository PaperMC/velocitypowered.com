import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/seo";
import MainPageButton from "../components/main-page-button";
import {Link} from "gatsby";
import {FiDownload} from "react-icons/all";
import Caution from "../components/warnings/caution";
import stylingGlobals from "../styles/styling-globals";

const LATEST = '1.1.0'

const DownloadsJumbotron = styled.div`
  background: var(--jumbotron);
  width: 100%;
  padding: 1rem 0;
  padding-bottom: 2rem;
  text-align: center;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    padding: 1rem 0;
  }
`

const SponsorJumbotronHeader = styled.h1`
  text-align: center;
`

const DownloadsContainer = styled.div`
  width: 80%;
  margin: 2rem auto 5rem auto;
`
const ButtonSection = styled.section`
  margin: auto;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    flex-direction: column;
  }
`

export default function Sponsors() {
  return (
    <>
      <SEO title="Downloads" />

      <DownloadsJumbotron>
        <section>
          <h1>Download Velocity</h1>
          <p>Ready to experience Velocity? Download the latest stable version or the latest development version:</p>
        </section>

        <ButtonSection>
          <MainPageButton icon={<FiDownload size={"36px"}/>}
                          title={`Stable (Velocity ${LATEST})`}
                          subtitle={'Recommended for most users'}
                          link={`https://versions.velocitypowered.com/download/${LATEST}.jar`} />
          <MainPageButton icon={<FiDownload size={"36px"}/>}
                          title={`Development (Velocity ${LATEST})`}
                          subtitle={'Bleeding edge bug fixes and improvements'}
                          link={`https://versions.velocitypowered.com/download/1.1.x-SNAPSHOT.jar`} />
        </ButtonSection>
      </DownloadsJumbotron>

      <DownloadsContainer>
        <h2>After you download Velocity...</h2>
        <p>We're so glad you're on board. Here's a few things you'll want to do:</p>

        <h3>Get Velocity set up</h3>
        <p>Check out our <Link to={"/wiki/users/getting-started/"}>wiki on how get started</Link> with Velocity.</p>

        <h3>Join our welcoming community</h3>
        <p>
          We're on <a href={"https://discord.gg/8cB9Bgf"}>Discord</a>, <a href={"https://github.com/VelocityPowered/Velocity"}>GitHub</a>,
          and <a href={"https://forums.velocitypowered.com/"}>our forums</a>.
        </p>

        <h3>Stuck?</h3>
        <p>
          Check out our extensive <Link to={"/wiki/"}>wiki</Link> &mdash; often the answer will be there. Otherwise come
          ask us on <a href={"https://discord.gg/8cB9Bgf"}>Discord</a> and we'll be able to help.
        </p>

        <h2>Other versions</h2>

        <h3>Velocity 1.0.10</h3>
        <Caution>
          The Velocity 1.0.x series is no longer supported by the Velocity team. You will <strong>not</strong> be able to obtain
          support. This download is provided for archival and historical purposes only.
        </Caution>

        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <MainPageButton icon={<FiDownload size={"16px"}/>}
                          title={"Legacy (Velocity 1.0.10)"}
                          link={`https://versions.velocitypowered.com/download/1.0.10.jar`}
                          demoted={true} />
        </div>
      </DownloadsContainer>
    </>
  )
}