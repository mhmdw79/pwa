import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider"

let cachData = "appV1"

this.addEventListener("install",event=>{
    event.waitUntil(
        caches.open(cachData).then(cache=>{
            cache.addAll([
                "/logo192.png",
                "/favicon.ico",
                "/manifest.json",
                "/static/js/bundle.js",
                "/index.html",
                "/",
                "/posts",
                
            ])
        })
    )
})


this.addEventListener("fetch",event=>{
    // event.waitUntil(
    //     this.registration.showNotification("hello",{
    //         body:"hello from noti"
    //     })
    // )
    if(!navigator.onLine){
         event.respondWith(
        caches.match(event.request).then(resp=>{
            if(resp){
                return resp
            }
           let requestURL = event.request.clone()
           fetch(requestURL)
        })
    )
    }
   
})