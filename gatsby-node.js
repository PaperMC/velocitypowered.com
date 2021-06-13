const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  // Why is Gatsby pulling this in?!?
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        http: false,
        https: false
      }
    }
  });
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: '/wiki' + node.fields.slug,
      component: path.resolve(`./src/templates/wiki.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}