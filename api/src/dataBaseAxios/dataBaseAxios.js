const axios = require('axios');
const { Country } = require('../db.js');


async function dataBase(){
    try {
     const response = await axios.get('https://restcountries.com/v3/all');
     const countries = response.data.map((el) => {
        return {
            name: el.name.common,
            id: el.cca3,
            flag_image: el.flags[1],
            continent: el.continents[0],
            capital: el.capital? el.capital[0] : "not capital",
            subregion: el.subregion,
            area: el.area,
            population: el.population
        }
     });

   const createCountries = await Country.bulkCreate(countries)
 }
 catch(error){
     console.log(error);
 }
 };

 module.exports = {dataBase};     