const countries = require('./countries.json');
const states = require('./states.json');
const cities = require('./cities.json');

// Function to get states by country ID
function getStatesByCountryId(countryId) {
  return states.filter(state => state.country_id === countryId);
}

// Function to get cities by state ID
function getCitiesByStateId(stateId) {
  return cities.filter(city => city.state_id === stateId);
}

// Function to get a country by its ID
function getCountryById(countryId) {
  return countries.find(country => country.id === countryId);
}

// Function to get a state by its ID
function getStateById(stateId) {
  return states.find(state => state.id === stateId);
}

// Function to get a city by its ID
function getCityById(cityId) {
  return cities.find(city => city.id === cityId);
}

// Function to get all countries
function getAllCountries() {
  return countries;
}

// Function to get all states
function getAllStates() {
  return states;
}

// Function to get all cities
function getAllCities() {
  return cities;
}

// Function to get country name by state ID
function getCountryNameByStateId(stateId) {
  const state = getStateById(stateId);
  return state ? getCountryById(state.country_id)?.name : null;
}

// Function to get state name by city ID
function getStateNameByCityId(cityId) {
  const city = getCityById(cityId);
  return city ? getStateById(city.state_id)?.name : null;
}

// Function to get full location name by city ID
function getFullLocationByCityId(cityId) {
  const city = getCityById(cityId);
  if (city) {
    const stateName = getStateNameByCityId(cityId);
    const countryName = getCountryNameByStateId(city.state_id);
    return stateName && countryName ? `${city.name}, ${stateName}, ${countryName}` : null;
  }
  return null;
}

// Function to search for states by partial name (case-insensitive)
function searchStatesByName(partialName) {
  const lowerCaseName = partialName.toLowerCase();
  return states.filter(state => state.name.toLowerCase().includes(lowerCaseName));
}

// Function to search for cities by partial name (case-insensitive)
function searchCitiesByName(partialName) {
  const lowerCaseName = partialName.toLowerCase();
  return cities.filter(city => city.name.toLowerCase().includes(lowerCaseName));
}

// Optionally, export the functions if needed
module.exports = {
  getStatesByCountryId,
  getCitiesByStateId,
  getCountryById,
  getStateById,
  getCityById,
  getAllCountries,
  getAllStates,
  getAllCities,
  getCountryNameByStateId,
  getStateNameByCityId,
  getFullLocationByCityId,
  searchStatesByName,
  searchCitiesByName
};


