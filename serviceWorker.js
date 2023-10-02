const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "index.html",
  "style.css",
  "app.js",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIF.tmlnAWTlNd6YOT3g8lTcHQ?pid=ImgDet&rs=1",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })