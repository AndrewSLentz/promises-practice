// Explain what is going on here.

var p = new Promise(function(res, rej){
    setTimeout(() => res(1), 1000)
})

p.then(add1) //--> value set to 1 on line 4 becomes 5 due to add1 function defined on line 13
.then((v) => console.log(v))
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then((v) => console.log(v)) //--> new Promise

function add1(v){ return v+1 }
