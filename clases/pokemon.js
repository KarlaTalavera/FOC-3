const axios = require('axios');

class Pokemon{

    constructor(){

    }

    getOne = async (pokemon) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            console.log(response.data);
        }catch (error) {
            console.error(error);
        }
    }
}

module.exports = {
    Pokemon
}