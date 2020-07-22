import React from "react"
import {graphql} from "gatsby";
import styled from "@emotion/styled"
import Layout from "../components/layout";
import Sidebar from "../components/docs-sidebar";
import wikiSidebar from "../../docs/sidebar-wiki.json"

const DocumentationContainer = styled.article`
  display: flex;
  margin: auto;
`

const ContentWrapper = styled.div`
  margin-left: 22rem;
  width: calc(100vw - 22rem);
  margin-bottom: 60px;
`

const Content = styled.section`
  max-width: 40rem;
  margin: 0 auto;
`

export default function Documentation({ data }) {
  console.log(wikiSidebar)
  const article = data.markdownRemark
  return (
    <Layout>
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
    }
  }
`