import React from "react"
import styled from "@emotion/styled"
import { FiAtSign } from "react-icons/fi"

import stylingGlobals from "../styles/styling-globals"

import mineteriaLogo from "../assets/img/sponsors/mineteria.png"
import voldexLogo from "../assets/img/sponsors/voldex.png"
import SEO from "../components/seo"

const SponsorJumbotron = styled.div`
  background: var(--jumbotron);
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

const Why = styled.main`
  width: 80%;
  margin: 2rem auto 3rem auto;
`

export default function Sponsors() {
  return (
    <>
      <SEO title="我们的赞助商" />
      <SponsorJumbotron>
        <SponsorJumbotronHeader>我们的赞助商</SponsorJumbotronHeader>
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
        <h2>为什么你们会有赞助商?</h2>

        <p>
          最初，Velocity 只是一个充满激情的项目，随着越来越多的人了解并使用它，是时候让我们成长并建立一个可靠的财务基础。
          正因如此，我们寻求并获得了来自那些使用 Velocity 服务器的赞助，同时希望对本项目的持续发展做出贡献。
        </p>

        <p>
          Velocity <strong>将永远保持开源</strong> - 但是持续开发 Velocity 需要一定的帮助.
          庆幸的是，我们并没有失去我们所关注的焦点. 我们的赞助商让 Velocity 变得更好，并对他的成功抱有很大的信心.
        </p>

        <h2>谁是赞助商? 他们提供了什么?</h2>

        <p>
          我们对赞助商的主要要求便是让他们<strong>坚定</strong>并且<strong>致力</strong>于 Velocity 项目的成功
        </p>

        <h3>Mineteria</h3>

        <p>
          <strong>Mineteria</strong> 是一个我的世界社交网络，它有小游戏以及虚拟住房。从很早的时候(2018年11月开始，也就是项目开始后的几个月), Mineteria 就开始使用 Velocity。
          在他们的帮助下，我们在2019年6月的时候我们发布了第一个稳定版本(1.0.0)。
        </p>

        <p>
          Mineteria 提供了一个让我们在真实使用场景下来测试 Velocity 新功能的机会。 此外，他们还雇佣了其中一名开发者 (Andrew/Tux), 这允许他在兼职的时候开发 Velocity
        </p>

        <h3>Voldex Services</h3>

        <p>
          <strong>Voldex Services</strong> 是一个我的世界网络的运营商(比如 TheArchon 和 PrimeMC)。
          Voldex 大方的为本项目所有基础设施支付了费用，其中包括了托管在 DigitalOcean的Jenkins实例以及我们的论坛
        </p>

        <h2>想要成为赞助商之一?</h2>

        <p>
          我们欢迎其他人的赞助。我们会仔细考虑所有赞助, 但是只接受我们必须认为对本项目有力，并致力于 Velocity 的成功。本质上来讲，你有<strong>责任</strong>
          来证明你的赞助对我们有帮助。
        </p>

        <p>
          如果您认为您符合我们的要求，并愿意被考虑，请发电子邮件至 velocity<FiAtSign />steinborn.me并在邮件中告诉我们你是谁，以及你将如何对我们提出帮助 (无论是提供资源还是金钱捐助)。
        </p>
      </Why>
    </>
  )
}