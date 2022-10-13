import React from "react"
import styled from "@emotion/styled"
import Seo from "../components/seo";
import MainPageButton from "../components/main-page-button";
import {Link} from "gatsby";
import {FiDownload} from "react-icons/fi";
import Caution from "../components/warnings/caution";
import stylingGlobals from "../styles/styling-globals";

const DownloadsJumbotron = styled.div`
  background: var(--jumbotron);
  padding: 0.5rem 1rem;
  padding-bottom: 2rem;
  text-align: center;
`

const ImploreDownload = styled.section`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
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
      <Seo title="Downloads" />

      <DownloadsJumbotron>
        <ImploreDownload>
          <h1>Download Velocity</h1>
          <p>Ready to experience Velocity? Download the latest version:</p>
        </ImploreDownload>

        <ButtonSection>
          <MainPageButton icon={<FiDownload size={"36px"}/>}
                          title={`Latest (Velocity 3.x.x)`}
                          subtitle={'Latest bug fixes and improvements'}
                          link={`https://papermc.io/downloads#Velocity`} />
        </ButtonSection>
      </DownloadsJumbotron>

      <DownloadsContainer>
        <h2>After you download Velocity...</h2>
        <p>We're so glad you're on board. Here's a few things you'll want to do:</p>

        <h3>Get Velocity set up</h3>
        <p>Check out our <Link href={"https://docs.papermc.io/velocity/getting-started"}>wiki on how get started</Link> with Velocity.</p>

        <h3>Join our welcoming community</h3>
        <p>
          We're on <a href={"https://discord.gg/papermc"}>Discord</a>, <a href={"https://github.com/PaperMC/Velocity"}>GitHub</a>,
          and <a href={"https://forums.papermc.io/"}>our forums</a>.
        </p>

        <h3>Stuck?</h3>
        <p>
          Check out our extensive <Link href={"https://docs.papermc.io/velocity"}>wiki</Link> &mdash; often the answer will be there. Otherwise come
          ask us on <a href={"https://discord.gg/papermc"}>Discord</a> and we'll be able to help.
        </p>

        <h2>Unsupported versions</h2>

        <Caution>
          The Velocity 1.x.x series is no longer supported. In addition, due to the&nbsp;
          <a href="https://www.lunasec.io/docs/blog/log4j-zero-day/">Log4Shell</a> security
          vulnerability they are also <em>unsafe to run</em>. These builds are for archival and historical purposes only.
        </Caution>

        <h3>Velocity 1.1.9</h3>

        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <MainPageButton icon={<FiDownload size={"16px"}/>}
                          title={"Velocity 1.1.9"}
                          link={`https://api.papermc.io/v2/projects/velocity/versions/1.1.9/builds/447/downloads/velocity-1.1.9-447.jar`}
                          demoted={true} />
        </div>

        <h3>Velocity 1.0.10</h3>

        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <MainPageButton icon={<FiDownload size={"16px"}/>}
                          title={"Velocity 1.0.10"}
                          link={`https://api.papermc.io/v2/projects/velocity/versions/1.0.10/builds/245/downloads/velocity-1.0.10-245.jar`}
                          demoted={true} />
        </div>
      </DownloadsContainer>
    </>
  )
}
