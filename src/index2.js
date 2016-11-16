// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var myvar = 'my value';

(function() {
    console.assert(myvar === undefined)
    var myvar = 'local value';
})()

// The assertion is within a closure so it doesn't have access to the outer scope, and it isn't defined in the local scope until after the assertion.


// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var flag = true;

function test() {
    if(flag) {
        var flag = false;
    }
    else {
        flag = true;
    }
    console.assert(flag === true);
}
test()

// flag starts true, is made false by the if statement, then true again by the else.

// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world';

function saySomething() {
    console.assert(message === undefined)
    var message = 'Foo bar'
}
saySomething()

// value of message was cleared first time through code, then asserted before being set again on line 34

// 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world';

function saySomething() {
    console.assert(message === 'Hello world')
    message = 'Foo bar'
}
saySomething()

// redefinition of message still happens in global scope (no var keyword), and after the assertion, so value is still 'Hello world' at time of assert.

// 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
function test() {
    console.assert(a === undefined)
    console.assert(foo() === 2)

    var a = 1
    function foo() {
        return 2
    }
}
test();

// a is defined with var keyword second time through code, the value of function foo is returned the first time through

// 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
(function() {
    console.assert(bar === undefined)
    console.assert(foo() === 'undefined - :)')

    function foo() {
        return bar+' - :)'
    }

    var bar = 1
})()

// as in the problem above, the value of bar hasn't been set at the time of either assertion,
// but function foo() has returned the value of bar (undefined) concatenated into a string with ' - :)'
