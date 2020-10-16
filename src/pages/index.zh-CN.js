import React from "react"
import { Link } from "gatsby-theme-localization"
import styled from "@emotion/styled"
import FullWidthButton from "../components/full-width-button"

import stylingGlobals from "../styles/styling-globals"

import SEO from "../components/seo"

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
      <SEO title="欢迎使用 Velocity" />
      <Jumbotron>
        <JumbotronLogo>
          <VelocityLogo />
          <div>
            <h1>Velocity</h1>
            <p>一个极度可扩展、高灵活性的我的世界代理服务器</p>
          </div>
        </JumbotronLogo>
      </Jumbotron>
      <Explainer>
        <ExplainerSection>
          <h2>为什么选择 Velocity?</h2>
          <p>
            Velocity 是一个专注于灵活和扩展性的新一代我的世界代理服务器. 他能让腐竹把多个我的世界服务器合并为一个。
          </p>
          <p>
            <strong>Velocity 是一个独立开发的项目, 并不是 BungeeCord 的克隆或重写</strong>.
            虽然有很多相同的地方，但也有很多不同的地方. 你可以在我们的技术wiki上找到相关文章.
          </p>
          <p>Velocity 的特别之处:</p>
          <ul>
            <li>
              <strong>速度</strong> - 拥有最快的服务器切换速度, 眨眼间即可完成 (即低于400毫秒)
            </li>
            <li>
              <strong>可靠</strong> - 一些大型我的世界群组服务器正在使用 Velocity
            </li>
            <li>
              <strong>灵活</strong> - 充分利用了现代多核CPU的优势
            </li>
            <li>
              <strong>兼容</strong> - 支持我的世界版本 1.7.2 至 1.16.3 的 Paper, Sponge, Forge, Fabric等服务端
            </li>
            <li>
              <strong>免费</strong> - 永远免费, 这是一个在<Link to={"/sponsors"}>我们的赞助商</Link>提供支持下开发的开源软件
            </li>
          </ul>
        </ExplainerSection>
        <ExplainerSection>
          <FullWidthButton title={"文档"} subtitle={"学习如何配置并搭建 " +
          " Velocity 服务器。 现已全面覆盖。"} link={"/wiki"} />
          <FullWidthButton title={"GitHub"} subtitle={"查看 Velocity 的源代码, 提交错误以及对此项目做出贡献"}
                           link={"https://github.com/velocitypowered/Velocity"} />
          <FullWidthButton title={"论坛"} subtitle={"讨论 Velocity 以及探索新的插件"}
                           link={"https://forums.velocitypowered.com"} />
          <FullWidthButton title={"Discord"} subtitle={"加入 Discord 服务器, 提出问题或与他人一起讨论 Velocity"}
                           link={"https://discord.gg/8cB9Bgf"} />
        </ExplainerSection>
      </Explainer>
    </>
  )
}
