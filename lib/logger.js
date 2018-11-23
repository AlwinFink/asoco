
var url = 'http://mylogger.io/log'

//override standard js log
function log(message) {
    // send http request
    console.log(message);
}

module.exports.log = log
