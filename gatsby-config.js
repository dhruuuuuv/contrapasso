require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "contrapasso",
    siteDescription: "A welcome home for all your artistic needs."
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN }
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_PUBLIC_API_TOKEN,
        autopop: true
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
