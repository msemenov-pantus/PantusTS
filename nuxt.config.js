export default {
  router: {
    prefetchLinks: false,
    middleware: "users-data",
  },
  storybook: {
    stories: ["@/components/**/*.stories.js"],
    addons: ["@storybook/addon-controls", "@storybook/addon-docs"],
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "confing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: "@/assets/sass-mixin/reset.sass" },
    { src: "@/assets/fonts/font-awesome/index.css" },
    // "@/assets/fonts/font-awesome/index.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~/plugins/axios.js" }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/composition-api",
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/style-resources",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://www.npmjs.com/package/cookie-universal-nuxt
    ["cookie-universal-nuxt"],
  ],
  styleResources: {
    sass: ["@/assets/sass-mixin/index.sass"],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },
  env: {
    api: "https://api.pantus.ru",
  },
};
