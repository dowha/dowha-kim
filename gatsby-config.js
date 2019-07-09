const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Dowha KIM"
  },
  plugins: [
    "gatsby-plugin-ueno",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ueno-gatsby-starter",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.png"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname, "src/assets/svg")
        }
      }
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/app-layout/AppLayout.tsx")
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ko`, `de`],
        // language file path
        defaultLanguage: `ko`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true
      }
    }
  ]
};
