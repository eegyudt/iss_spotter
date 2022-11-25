const { fetchMyIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
// HTTPS: https://github.com/eegyudt/iss_spotter.git
// SSH git@github.com:eegyudt/iss_spotter.git