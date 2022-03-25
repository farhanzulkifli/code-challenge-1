const axios = require("axios");

const endpoint = "https://static.ngnrs.io/test/prices";

const getPrices = async () => {
  try {
    const res = await axios.get(endpoint);
    const prices = res.data.data.prices;
    return prices.map((price) => ({
      ...price,
      mid: () => price.buy + price.sell / 2,
      quote: () => price.pair.substr(3),
    }));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPrices };
