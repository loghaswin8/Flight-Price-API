const axios = require('axios');

async function getFlightPrices(origin, destination) {
  try {
    const apiKey = 'HZv3LiIEdU5Yz2KAEIqF8mOPw1csMMAZ'; //myapikey
    //urlofFlightprice
    const url = `https://test.api.amadeus.com/v1/analytics/itinerary-price-metrics?originIataCode=DEL&destinationIataCode=JAI&departureDate=2021-03-21&currencyCode=INR&oneWay=true`;

    const response = await axios.get(url);
    const flightData = response.data;

    // Process flight data and display prices
    flightData.forEach((flight) => {
      const price = flight.price;
      console.log(`Flight from ${origin} to ${destination}: $${price}`);
    });
  } catch (error) {
    console.error('Error retrieving flight prices:', error.message);
  }
}

// Usage example
const originCity = 'New Delhi';
const destinationCity = 'Jaipur';
getFlightPrices(originCity, destinationCity);
