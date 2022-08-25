


export default function swDev(){
   
function determineAppServerKey(){
  var vapidPublicKey = "BDrsEIWlTy1YTAZxpkN1f1C0EcuCjL15j8lxS3KaXzDE_BvlWIHEIGdmsP3hfiiG3ldbF89pWEc6foyFxSOe5es"
  return urlBase64ToUint8Array(vapidPublicKey)
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

let swURL = `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(swURL).then(respose=>{
    console.warn("response",respose)
   return respose.pushManager.getSubscription()
   .then(function (subscripation) {
    return respose.pushManager.subscribe({
      userVisibleOnly:true,
      applicationServerKey:determineAppServerKey
    })
   })
  })
} 



