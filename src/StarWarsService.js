export default class StarWarsService{

    async getAllPeople () {

        let response = await fetch(`https://swapi.dev/api/people/`).then(value => value.json());
        return response
    }

   async getPlanets () {

       let response = await fetch(`https://swapi.dev/api/planets/`).then(value => value.json());
       return response;
   }

   async getAllStarShips () {

        let response = await fetch(`https://swapi.dev/api/starships/`).then(value => value.json());
        return response
    }
}
