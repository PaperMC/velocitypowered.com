import React from "react"
import {graphql} from "gatsby";
import SEO from "../components/seo";
import styled from "@emotion/styled"
import Layout from "../components/layout";
import Sidebar from "../components/docs-sidebar";
import wikiSidebar from "../../docs/sidebar-wiki.json"

import stylingGlobals from "../styles/styling-globals"

const DocumentationContainer = styled.article`
  display: flex;
  margin: auto;
  
  @media (max-width: ${stylingGlobals.viewportSizes.desktop}) {
    flex-direction: column-reverse;
  }
`

const ContentWrapper = styled.div`
  margin-left: 22rem;
  margin-bottom: 60px;
  width: calc(100vw - 22rem);
  
  @media (max-width: ${stylingGlobals.viewportSizes.tablet}) {
    margin: 0 1rem;
    width: auto;
  }
`

const Content = styled.section`
  max-width: 40rem;
  margin: 0 auto;
`

export default function Documentation({ location, data }) {
  const article = data.markdownRemark
  return (
    <Layout location={location}>
      <SEO title={article.frontmatter.title} description={article.excerpt} />
      <DocumentationContainer>
        <Sidebar sidebar={wikiSidebar} />
        <ContentWrapper>
          <Content>
            <h1>{article.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.html }} />
          </Content>
        </ContentWrapper>
      </DocumentationContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`