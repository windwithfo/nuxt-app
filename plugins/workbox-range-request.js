workbox.routing.registerRoute(
  /\.(mp4|webm|mp3)/,
  workbox.strategies.cacheFirst({
    plugins: [
      new workbox.rangeRequests.Plugin(),
    ],
  }),
  'GET'
)
