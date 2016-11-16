// Explain what is going on here.

var p = new Promise(function(res, rej){
    setTimeout(() => res(1), 1000)
})

p.then(add1) //--> value set to 1 on line 4 becomes 2 due to add1 function defined on line 13
    .then(add1) //--> value changed to 2 on previous line becomes 3 due to add1
    .then(add1) //--> value three becomes 4
    .then(add1) //--> value 4 becomes 5
    .then((v) => console.log(v)) //--> value, still set to 5 is logged to console.

function add1(v){ return v+1 }
