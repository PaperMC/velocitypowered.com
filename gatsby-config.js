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
            variants: [`300`, `400`, `400i`, `700`, `700i`]
          }
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-theme-localization`,
      options: {
        languages: ['en-US', 'zh-CN'],
        namespaces: [],
        localesDir: './src/locales',
        allowIndex: false,
        defaultLng: 'en-US',
        i18next: {
          fallbackLng: 'en-US',
          debug: process.env.NODE_ENV !== 'production'
        },
        i18nPlugin: {
          langKeyDefault: 'en-US',
          useLangKeyLayout: false
        }
      }
    }
  ],
}
