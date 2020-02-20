  const faker = require('faker');

  var generateRandomData = function (userContext, events, done) {
    const randomNumber = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
    const name = faker.commerce.productName();
    userContext.vars.randomNumber = randomNumber;
    userContext.vars.name = name;
    return done();
  }

  module.exports = {
    generateRandomData
  };
