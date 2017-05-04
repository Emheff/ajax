// INCLUDES
// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

// 'load()' method
//$('#data').load('/data/data.txt');
//$('#data').load('/data/data.html');
//$('#data').load('/data/data.json');

// Handshake with AirTable
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyAIcOml7Wk0NBn5'}).base('appblhBb7wKlWrfG8');

// AJAX Call

base('Entertainers').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 6,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
    
    // Display to page HERE

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});