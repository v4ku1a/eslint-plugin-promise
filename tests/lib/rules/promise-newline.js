/**
 * @fileoverview ...
 * @author andrii
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/promise-newline"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("promise-newline", rule, {

    valid: [
        `promise
        .then( console.log(1) );`,

        `promise
        .then( console.log(1) )
        .then( console.log(1) );`,

        `promise
        .then( console.log(1) )
        .catch( console.log(1) );`,        

        `promise
        .then( console.log(1) )
        .then( console.log(1) )
        .catch( console.log(1) );`,

        `this.message = greeter.say('hello');`
    ],

    invalid: [
        {
            code: "promise.then( console.log(1) ).then( console.log(1) );",
            errors: [{
                message: ".then and .catch must be on new line",
                type: "ExpressionStatement"
            }]
        },
        {
            code: "promise.then( console.log(1) ).catch( console.log(1) );",
            errors: [{
                message: ".then and .catch must be on new line",
                type: "ExpressionStatement"
            }]
        },
        {
            code: `promise.then( console.log(1) )
                    .then( console.log(1) );`,
            errors: [{
                message: ".then and .catch must be on new line",
                type: "ExpressionStatement"
            }]
        },
        {
            code: "promise    .then( console.log(1) )    .then( console.log(1) );",
            errors: [{
                message: ".then and .catch must be on new line",
                type: "ExpressionStatement"
            }]
        }
    ]
});
