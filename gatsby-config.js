/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  pathPrefix: '/pool-landscape',
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.pool-landscape.it`
  },
  plugins: [
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({node}) => {
          const name = node.sourceInstanceName
          if (name === `products`) {
            return `Product`
          }
          if (name === `projects`) {
            return `Project`
          }
          return name
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: `projects`
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47378713-3'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/images/icon.png`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-VZF4EKDJWK", // Google Analytics
        ]
      }
    },
    'gatsby-plugin-gatsby-cloud'
  ]
}
