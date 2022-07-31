// const unsplash = require("./unsplash.json");
// const unsplash2 = require("./unsplash2.json");
// const unsplash3 = require("./unsplash3.json");
// const unsplash4 = require("./unsplash4.json");
// const unsplash5 = require("./unsplash5.json");

const fs = require("fs");

// let images = [];

// unsplash.results.forEach((image) => {
//   images.push(image.urls.small);
// });

// unsplash2.results.forEach((image) => {
//   images.push(image.urls.small);
// });

// unsplash3.results.forEach((image) => {
//   images.push(image.urls.small);
// });

// unsplash4.results.forEach((image) => {
//   images.push(image.urls.small);
// });

// unsplash5.results.forEach((image) => {
//   images.push(image.urls.small);
// });

// fs.writeFileSync("./images.json", JSON.stringify({ images }));

const mock = require("./MOCK_DATA.json");
const images = require("./images.json");

const properties = [];

const types = [
  "Independent House",
  "Residential Apartment",
  "Independent Floor",
  "Apartment Studio",
  "Farm House",
];

mock.forEach((data) => {
  properties.push({
    ...data,
    type: types[Math.floor(Math.random() * types.length)],
    image: images.images[Math.floor(Math.random() * images.images.length)]
  })
});

fs.writeFileSync("./data.json", JSON.stringify(properties));
