/**
 * @fileoverview ...
 * @author andrii
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "...",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        let sourceCode = context.getSourceCode();

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            "ExpressionStatement": function(node) {
                let currentNodeCode = sourceCode.getText(node);
                let matchGeneral = currentNodeCode.match(/\.(then|catch)/mg);
                let matchCorrect = currentNodeCode.match(/^[\t ]+?\.(then|catch)/mg);

                if( matchGeneral &&
                    matchCorrect &&
                    matchGeneral.length === matchCorrect.length) {
                    return;
                } else {
                    context.report(node, '.then and .catch must be on new line');
                }
            }
        };
    }
};
