export default class StarWarsService{

    async getAllPeople () {

        let response = await fetch(`https://swapi.dev/api/people/`).then(value => value.json());
        return response
    }
async getPeople (name) {

        let response = await fetch(`https://swapi.dev/api/people/${name}`).then(value => value.json());
        return response
    }



   async getAllPlanets () {

       let response = await fetch(`https://swapi.dev/api/planets/`).then(value => value.json());
       return response;
   }

async getPlanets (name) {

       let response = await fetch(`https://swapi.dev/api/planets/${name}`).then(value => value.json());
       return response;
   }





   async getAllStarShips () {

        let response = await fetch('https://swapi.dev/api/starships/').then(value => value.json());
        return response
    }

    async getStarShips (name) {

        let response = await fetch(`https://swapi.dev/api/starships/${name}`).then(value => value.json());
        return response
    }
}
