/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const developers =[
  {
    caption: 'Lucas',
    image: 'https://avatars0.githubusercontent.com/u/5278697?s=460&v=4',
    link: 'https://github.com/Lcunha',
    pinned: true,
  },
  {
    caption: 'Guilherme',
    image: 'https://avatars0.githubusercontent.com/u/30850075?s=460&v=4',
    link: 'https://github.com/gleal17',
    pinned: true,
  },
  {
    caption: 'Henrique',
    image: 'https://avatars0.githubusercontent.com/u/32500464?s=460&v=4',
    link: 'https://github.com/Henrike100',
    pinned: true,
  },
  {
    caption: 'Kalliu',
    image: 'https://avatars2.githubusercontent.com/u/37154512?s=460&v=4',
    link: 'https://github.com/kalliub',
    pinned: true,
  },
  {
    caption: 'Victor',
    image: 'https://avatars3.githubusercontent.com/u/20848512?s=460&v=4',
    link: 'https://github.com/VictorRodriguesS0',
    pinned: true,
  },
];

const siteConfig = {
  title: "Roles", // Title for your website.
  tagline: "Aplicativo de Eventos FGA-UnB",
  url: "https://fga-eps-mds.github.io/2018.2-Roles", // Your website URL
  baseUrl: "/2018.2-Roles/", // Base URL for your project */
  helpUrl: "https://github.com/fga-eps-mds/2018.2-Roles",

  // Used for publishing and more
  projectName: "2018.2-Roles",
  organizationName: "fga-eps-mds",

  // For no header links in the top nav bar -> headerLinks: [],
  
  headerLinks: [
    { doc: "doc_visao", label: "Docs" },
    { doc: "sprints/sprint_1", label: "Sprints" },
    { blog: true, label: "Blog" },
    { page: "help", label: "Help" }
  ],

  /* path to images for header/footer */
  headerIcon: "./img/icon_v1.jpg",
  footerIcon: ".svg",
  favicon: ".png",

  /* Colors for website */
  colors: {
    primaryColor: "#00ff00",
    secondaryColor: "#00fa00"
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} RolesFGA - EPS/MDS 2.2018`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/docusaurus.png",
  twitterImage: "img/docusaurus.png"

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};


module.exports = siteConfig;
