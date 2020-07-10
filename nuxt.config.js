export default {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'universal',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: 'Bappa | Welcome Home',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"},
            {href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic', rel: 'stylesheet'}
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
                type: "text/javascript"
            },
            {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
                type: "text/javascript"
            }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/clean-blog.min.css'
    ],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/apollo'
    ],


    auth: {
        redirect: {
            login: '/', // redirect user when not connected
            callback: '/auth/signed-in'
        },
        strategies: {
            auth0: {
                domain: 'bappa.auth0.com',
                client_id: 'eWRRVYRtO6j5Yr0hRWkuDgq8FtSuIvDk'
            },
            local: {
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
                },
                // tokenRequired: true,
                // tokenType: 'bearer',
                // globalToken: true,
                // autoFetchUser: true
            }
        }
    },
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {},

    loadingIndicator: {
        name: 'circle',
        color: '#3B8070',
        background: 'white'
    },

    // loading: {
    //   color: 'blue',
    //   height: '5px'
    // }

    apollo: {
        tokenName: 'BlogTokenName', // optional, default: apollo-token
        cookieAttributes: {
            /**
             * Define when the cookie will be removed. Value can be a Number
             * which will be interpreted as days from time of creation or a
             * Date instance. If omitted, the cookie becomes a session cookie.
             */
            expires: 7, // optional, default: 7 (days)

            /**
             * Define the path where the cookie is available. Defaults to '/'
             */
            path: '/', // optional
            /**
             * Define the domain where the cookie is available. Defaults to
             * the domain of the page where the cookie was created.
             */
            domain: 'example.com', // optional

            /**
             * A Boolean indicating if the cookie transmission requires a
             * secure protocol (https). Defaults to false.
             */
            secure: false,
        },
        includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
        authenticationType: 'Basic', // optional, default: 'Bearer'
        // (Optional) Default 'apollo' definition
        defaultOptions: {
            // See 'apollo' definition
            // For example: default query options
            $query: {
                loadingKey: 'loading',
                fetchPolicy: 'cache-and-network',
            },
        },
        // optional
        watchLoading: '~/plugins/apollo-watch-loading-handler.js',
        // optional
        errorHandler: '~/plugins/apollo-error-handler.js',
        // required
        clientConfigs: {
            default: {
                // required
                httpEndpoint: 'http://localhost:4000',
                // optional
                // override HTTP endpoint in browser only
                browserHttpEndpoint: '/graphql',
                // optional
                // See https://www.apollographql.com/docs/link/links/http.html#options
                httpLinkOptions: {
                    credentials: 'same-origin'
                },
                // You can use `wss` for secure connection (recommended in production)
                // Use `null` to disable subscriptions
                wsEndpoint: 'ws://localhost:4000', // optional
                // LocalStorage token
                tokenName: 'apollo-token', // optional
                // Enable Automatic Query persisting with Apollo Engine
                persisting: false, // Optional
                // Use websockets for everything (no HTTP)
                // You need to pass a `wsEndpoint` for this to work
                websocketsOnly: false // Optional
            },
            test: {
                httpEndpoint: 'http://localhost:5000',
                wsEndpoint: 'ws://localhost:5000',
                tokenName: 'apollo-token'
            },
            // alternative: user path to config which returns exact same config options
            test2: '~/plugins/my-alternative-apollo-config.js'
        }
    }
}
