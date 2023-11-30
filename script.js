//Script

//Functionality to use bulbapedia to get img back0 
// https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Bulbasaur
// the end point of this node, we can replace "bulbasaur" with + nameOfPokeQuizResult    some type of result variable


//=============================================== PokemonApi

function findAPokemon(pokePick){
    var pokedexNumber = "https://pokeapi.co/api/v2/pokemon/"+pokePick+"/"
    console.log(pokedexNumber)

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


        var pokePick = 7;


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
accessPokemonApi()

//================================================= GiphyApi

var giphyApiKey = "832va7uRpJ7h6cRIeQSDqVb72uTktwtu"

function accesssGiphyApi() {
    var pokemonApiCall = "https://pokeapi.co/api/v2/"
    fetch(pokemonApiCall)
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        // var pokemonApiData = data
        // console.log(data)

    })

}

