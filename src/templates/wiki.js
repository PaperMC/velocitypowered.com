import React from "react"
import {graphql, Link} from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo";
import styled from "@emotion/styled"
import Sidebar from "../components/docs-sidebar";
import wikiSidebar from "../../docs/sidebar-wiki.json"

import Caution from "../components/warnings/caution";

import stylingGlobals from "../styles/styling-globals"

const DocumentationContainer = styled.article`
  display: flex;
  margin: auto;
  
  @media (max-width: ${stylingGlobals.viewportSizes.tablet}) {
    flex-direction: column-reverse;
  }
  
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    margin-bottom: 60px;
  }
`

const ContentWrapper = styled.div`
  margin: 0 1rem;
  width: auto;
  
  @media (min-width: ${stylingGlobals.viewportSizes.tablet}) {
    margin-left: 15rem;
    margin-right: 1rem;
    width: calc(100vw - 16rem);
  }
  
  @media (min-width: ${stylingGlobals.viewportSizes.desktop}) {
    margin-left: 20rem;
    margin-right: 0;
    width: calc(100vw - 20rem);
  }
`

const Content = styled.section`
  max-width: 40rem;
  margin: 0 auto;
`

const shortlinks = { Caution, Link }

export default function Documentation({ location, data }) {
  const article = data.mdx
  return (
    <>
      <SEO title={article.frontmatter.title} description={article.excerpt} />
      <DocumentationContainer>
        <Sidebar sidebar={wikiSidebar} />
        <ContentWrapper>
          <Content>
            <h1>{article.frontmatter.title}</h1>
            <MDXProvider components={shortlinks}>
              <MDXRenderer>{article.body}</MDXRenderer>
            </MDXProvider>
          </Content>
        </ContentWrapper>
      </DocumentationContainer>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      excerpt
    }
  }
`