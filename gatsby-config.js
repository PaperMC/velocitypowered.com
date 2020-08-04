/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Velocity`,
    description: `The ridiculously scalable, flexible Minecraft proxy.`,
    author: `Velocity Contributors`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          }
        ],
        extensions: [`.mdx`, `.md`],
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `400i`, `700`, `700i`]
          }
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
