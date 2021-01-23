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
    siteUrl: `https://velocitypowered.com`,
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
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Roboto:300,400,400i,700,700i']
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
    //`gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
