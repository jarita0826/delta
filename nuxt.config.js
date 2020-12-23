export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "delta",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["@/assets/css/main.css"],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ["~/plugins/font-awesome"],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: ["@nuxtjs/tailwindcss"],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        // https://go.nuxtjs.dev/content
        "@nuxt/content",
        "nuxt-fontawesome",
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    fontawesome: {
        // See https://github.com/vaso2/nuxt-fontawesome
        // 这里设置了组建的标签为fa
        // 如果不设置，则默认为在font-awesome.js中，生成的：font-awesome-icon
        component: "fa",
        imports: [{
                set: "@fortawesome/free-solid-svg-icons",
                icons: ["fas"],
            },
            {
                set: "@fortawesome/free-regular-svg-icons",
                icons: ["far"],
            },
            {
                set: "@fortawesome/free-brands-svg-icons",
                icons: ["fab"],
            },
        ],
    },
};