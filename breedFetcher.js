const req = require('request');
const breedName = process.argv.splice(2)[0];

const breed = req.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (e, response, body) => {
  if (e) {console.log(e)}
  const breed = JSON.parse(body)[0];
  if (breed) {
    console.log(breed.description);
  }
  else {
    console.log(`No species start with the letters ${breedName}`);
  }
});

// console.log(breedName);
// console.log(breed)