//Script

//Functionality to use bulbapedia to get img back0 
// https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Bulbasaur
// the end point of this node, we can replace "bulbasaur" with + nameOfPokeQuizResult    some type of result variable


//=============================================== PokemonApi

function findAPokemon(pokePick){
    var pokedexNumber = "https://pokeapi.co/api/v2/pokemon/"+pokePick+"/"
    console.log(pokedexNumber)

    fetch(pokedexNumber)
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        var comepletePokemonInfo = data;
        console.log(comepletePokemonInfo)

        var pokeName = comepletePokemonInfo.name;
        console.log("Pokemon Name: " + pokeName)

        var pokeAbilitiesArray = comepletePokemonInfo.abilities
           function countPokeAbilities(pokeAbilitiesArray){
            
            for(i = 0; i < pokeAbilitiesArray.length; i++){
                console.log("Pokemon Ability "+(i+1)+ ": " + pokeAbilitiesArray[i].ability.name)
            }
        }
        countPokeAbilities(pokeAbilitiesArray)


        var pokeType = comepletePokemonInfo.types[0].type.name;
        console.log("Pokemon Type: " + pokeType)

        //testing branching request
        var boop ="bop"
    })

}






function accessPokemonApi() {
    var pokemonApiCall = "https://pokeapi.co/api/v2/pokemon?&limit=151"
    fetch(pokemonApiCall)
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        var pokemonApiData = data
        console.log(pokemonApiData)

        //this variable will be set dynamically from the pokesona quiz
        var pokePick = 87;


        findAPokemon(pokePick)

        var pokemonTypes;
        //we can match persons favorite color to a pokemon type
        
        var pokemonLocations;
        // maybe, would involve alot deeper of a dive

        var pokemonNature;

        var pokemonBerry
        


        

        var pokemonSprites;
        //preferrable use Bublapedia for pokemon images
        //show pokemon sprite
        

        var pokeDex;
        //for search history/bar






    })

}
// accessPokemonApi()

//================================================= GiphyApi

var giphyApiKey = "832va7uRpJ7h6cRIeQSDqVb72uTktwtu"

function accesssGiphyApi() {
    var giphyApiCall = "https://api.giphy.com/v1/gifs/trending?&api_key=" + giphyApiKey;
    fetch(giphyApiCall)
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        // var pokemonApiData = data
        console.log(data)

    })

}

accesssGiphyApi()