const createFilePath = require(`./build/parseFilePath`)
const path = require('path')
const { groupBy, get, unionBy, flatten } = require('lodash')

const supportedLanguages = [
  'en-US', // American English
  'zh-CN' // Simplified Chinese
]

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const {lang, slug} = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `language`,
      value: lang,
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
              language
            }
          }
        }
      }
    }
  `)

  function materializeLanguagePage(language, node) {
    let urlPrefix
    if (!language || language === 'en') {
      urlPrefix = `/wiki`
    } else {
      urlPrefix = `/${language}/wiki`
    }
    createPage({
      path: urlPrefix + node.fields.slug,
      component: path.resolve(`./src/templates/wiki.js`),
      context: {
        slug: node.fields.slug,
        localizedLanguage: node.fields.language,
        language: language
      },
    })
  }

  // first get all known pages for each language
  const knownPagesByLanguage = groupBy(result.data.allMdx.edges, node => get(node, 'node.fields.language', 'en-US'))

  for (const language of supportedLanguages) {
    const pages = unionBy(flatten([knownPagesByLanguage[language], knownPagesByLanguage['en-US']]), page => {
      return page.node.fields.slug
    })
    console.log(`All ${language} pages: ${JSON.stringify(pages)}`)
    for (const page of pages) {
      materializeLanguagePage(language, page.node)
    }
  }
}