
// Logging
var log = require('./logger.js');
log.info('Hallo');

// initiale Daten können so über eine exteren Datei übergeben werden
var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);