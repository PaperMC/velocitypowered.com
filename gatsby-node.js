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
