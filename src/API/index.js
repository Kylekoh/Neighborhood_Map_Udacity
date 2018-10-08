const yelp = require('yelp-fusion');

const client = yelp.client("GrUMHFgMBaO_tufUneZYR9GQT6qY_ygfTpdEKMEJB8neWXEUOctSxA47tDh-X1seI58cDFN1YZggv1JT7H84B0oTJsZXjm8y4P_GiR32FznokaUVxv4wGxoXNQa7W3Yx");

client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});