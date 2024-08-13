# Region-Info

`region-info-package` provides a comprehensive set of functions to manage and retrieve information about countries, region-info-package management for both frontend and backend applications states, and cities. This package is designed to simplify the handling of geographical data and enhance your application's location-based features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Functions](#functions)
    - [getStatesByCountryId](#getstatesbycountryidcountryid)
    - [getCitiesByStateId](#getcitiesbystateidstateid)
    - [getCountryById](#getcountrybyidcountryid)
    - [getStateById](#getstatebyidstateid)
    - [getCityById](#getcitybyidcityid)
    - [getAllCountries](#getallcountries)
    - [getAllStates](#getallstates)
    - [getAllCities](#getallcities)
    - [getCountryNameByStateId](#getcountrynamebystateidstateid)
    - [getStateNameByCityId](#getstatenamebycityidcityid)
    - [getFullLocationByCityId](#getfulllocationbycityidcityid)
    - [searchStatesByName](#searchstatesbynamepartialname)
    - [searchCitiesByName](#searchcitiesbynamepartialname)
- [License](#license)

## Installation

To install this package, use npm:

```bash
npm install region-info-package
```


## Usage

Importing the Module

```bash
const { getStatesByCountryId } = require('region-info-package');
```

### Functions

#### getStatesByCountryId(countryId)

Finds all states in a specific country.
Pass in the country ID, and it returns a list of states.

```bash
const states = getStatesByCountryId(1);
console.log(states);
```
#### getCitiesByStateId(stateId)

Finds all cities in a specific state.
Pass in the state ID, and it returns a list of cities.

```bash
const cities = getCitiesByStateId(1);
console.log(cities);
```

#### getCountryById(countryId)

Gets the details of a country using its ID.

```bash
const country = getCountryById(1);
console.log(country);
```

#### getStateById(stateId)

Gets the details of a state using its ID.

```bash
const state = getStateById(1);
console.log(state);
```


#### getCityById(cityId)

Gets the details of a city using its ID.

```bash
const city = getCityById(1);
console.log(city);
```


#### getAllCountries()

Returns a list of all countries.

```bash
const allCountries = getAllCountries();
console.log(allCountries);
```

#### getAllStates()
Returns a list of all states.

```bash
const allStates = getAllStates();
console.log(allStates);
```

#### getAllCities()

Returns a list of all cities.

```bash
const allCities = getAllCities();
console.log(allCities);
```


#### getCountryNameByStateId(stateId)

Finds the country name for a specific state.

```bash
const countryName = getCountryNameByStateId(1);
console.log(countryName);
```

#### getStateNameByCityId(cityId)

Finds the state name for a specific city.

```bash
const stateName = getStateNameByCityId(1);
console.log(stateName);
```

#### getFullLocationByCityId(cityId)

Gets the full location (city, state, and country) for a specific city.

```bash
const fullLocation = getFullLocationByCityId(1);
console.log(fullLocation);
```

#### searchStatesByName(partialName)

Searches for states by name (case-insensitive).

```bash
const matchingStates = searchStatesByName('New');
console.log(matchingStates);
```

#### searchCitiesByName(partialName)

Searches for cities by name (case-insensitive).

```bash
const matchingCities = searchCitiesByName('York');
console.log(matchingCities);
```


