/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Angel Rodriguez`,
    author: `Angel`,
    firstName: `Angel`,
    lastName: `Rodriguez`,
    description: `John Doe's personal site`,
    occupation: `Software Engineer`,
    keywords: [`John`, `Doe`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Software Developer`,
    ],
    readingList: [
      {
        title: `Learning JavaScript Data Structures and Algorithms`,
        author: `Loiane Groner`,
        link: `https://www.amazon.com/Learning-JavaScript-Data-Structures-Algorithms-ebook/dp/B00OYTCT02?crid=1E4732RQ74857&dchild=1&keywords=learning+javascript+data+structures+and+algorithms&qid=1613715025&sprefix=learning+javascript+data,aps,339&sr=8-2&linkCode=sl1&tag=nschurmann-20&linkId=3ce37b27caaa5cf756e647e3f5cb0371&language=en_US&ref_=as_li_ss_tl`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
