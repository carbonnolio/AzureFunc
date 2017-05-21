//var request = require('request');

module.exports = function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (request.headers['content-type'] === 'application/json') {
        if ((request.query.name || (request.body && request.body.name))) {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Hello " + (request.query.name || request.body.name) + `. Headers: ${request.headers['content-type']}`
            };
        }
        else {
            context.res = {
                status: 400,
                body: "Please pass a name on the query string or in the request body"
            };
        }
    } else {
        context.res = {
            status: 400,
            body: "Invalid request content."
        };
    }

    context.done();
};