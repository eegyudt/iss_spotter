/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP = function(address, callback) {

  request(address, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (!data.length) {
      // console.log(`${breed} breed cannot be found in the database!`);
      return callback('no data found', null);
    }

    // console.log(`${breed} breed cannot be found in the database!`);
    const description = data[0]['description'];
    return callback(null, description);

  });

};

module.exports = { fetchMyIP };

// HTTPS: https://github.com/eegyudt/iss_spotter.git
// SSH git@github.com:eegyudt/iss_spotter.git


// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });