export default {
    loading: '~/components/Preloader.vue',
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      title: 'Dygoo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
          { src: "/js/libs/jquery/jquery.min.js" },
          { src: "/js/libs/bootstrap/js/bootstrap.bundle.min.js" },
          { src: "/js/libs/metismenu/metisMenu.min.js" },
          { src: "/js/libs/waypoints/lib/jquery.waypoints.min.js" },
          { src: "/js/libs/jquery.counterup/jquery.counterup.min.js" },
          { src: "/js/app.js" }
      ]
    },
  
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "~/assets/css/bootstrap-dark.min.css",
        "~/assets/css/icons.min.css",
        "~/assets/css/app-dark.min.css"
    ],
  
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],
  
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,
  
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],
  
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
			'nuxt-socket-io',
      '@nuxtjs/date-fns',
		],

		io: {
			// module options
			sockets: [{
				name: 'main',
				url: 'ws://dygoo.herokuapp.com'
			}]
		},
  
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
		},
  }
  