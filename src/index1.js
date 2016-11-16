/**
Create function `getGeo()` that returns a Promise.

This Promise will resolve to a coordinates object like:
{ lat: ..., long: ... }

You should use `navigator.geolocation.getCurrentPosition(successCallback, errorCallback);` where successCallback and errorCallback are functions to handle the resolution or rejection of the promise.

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

**/

function getGeo(){
    // ...
}

getGeo.then(function(coords) {
  console.log('IF YOU DO NOT SEE ME IN CONSOLE, SOMETHING IS BROKEN');
  console.assert(typeof coords.lat === 'number');
  console.assert(typeof coords.long === 'number');
});
