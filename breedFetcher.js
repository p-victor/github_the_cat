const req = require('request');
const URL = "https://api.thecatapi.com/v1/breeds/search?q="

const fetchBreedDescription = (breedName, callback) => {
  req.get(`${URL}${breedName}`, (error, _response, body) => {
    const breed = JSON.parse(body || "{}")[0];
    if (error) {
      callback(error, breed);
    }
    if (breed) {
      callback( error, breed.description);
    }
    else {
      callback( `No species start with the letters ${breedName}`, breed);
    }
  });
}

module.exports = { fetchBreedDescription };