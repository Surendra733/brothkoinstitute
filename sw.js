import { cache } from "react"

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./src/master.css"]);
    })
  );
});
self.addEventListener("fetch", e => {
  console.log(`Interception fetch request for: ${e.request.url}`);
  
});