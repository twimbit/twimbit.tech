module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '7ed1754b947b4fea84796d9bd79e705d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'tech@twimbit',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'twimbit.tech',
  author: 'twimbit',

  // Use custom font family (leave empty to use default font)
  fontFamily: 'Nunito',

  // open graph metadata (optional)
  description: 'Where all the amazing tech at twimbit is built',
  socialImageTitle: 'twimbit.com',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'twimbitHq',
  github: 'twimbit',
  linkedin: 'twimbit',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'wzulfikar/wzulfikar.com',
  utterancesGitHubLabel: 'blog-comment',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  showGithubRibbon: false,
  showPageAsideSocials: false
}
