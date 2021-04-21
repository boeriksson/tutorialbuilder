module.exports = {
    siteMetadata: {
        title: "tutorials",
        siteUrl: "https://tutorialbuilder.gatsbyjs.io/"
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png"
            }
        },
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
                extensions: [`.mdx`, `.md`]
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Lora`
                ],
                display: 'swap'
            }
        }
    ]
};
