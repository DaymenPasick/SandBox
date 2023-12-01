//Script

//=============================================== PokemonApi

function findAPokemon(pokePick){
    var pokedexNumber = "https://pokeapi.co/api/v2/pokemon/"+pokePick+"/"
    
    fetch(pokedexNumber)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        var comepletePokemonInfo = data;
        

        //will show pokemon name, dex#, and api return link
        var pokeName = comepletePokemonInfo.name;
        console.log("Pokemon Name: " + pokeName)
        console.log("Pokedex Number("+pokePick+"): " + pokedexNumber)


        accesssGiphyPokemonApi(pokeName)

        var pokeAbilitiesArray = comepletePokemonInfo.abilities
           function countPokeAbilities(pokeAbilitiesArray){
            
            for(i = 0; i < pokeAbilitiesArray.length; i++){
                console.log("Pokemon Ability "+(i+1)+ ": " + pokeAbilitiesArray[i].ability.name)
            }
        }
        countPokeAbilities(pokeAbilitiesArray)

        var pokeType = comepletePokemonInfo.types[0].type.name;
        console.log("Pokemon Type: " + pokeType)
    })
}



//makes first call to pokemon API, will be used to set pokePick variable for findAPokemon()
function accessPokemonApi() {
    var pokemonApiCall = "https://pokeapi.co/api/v2/pokemon?&limit=151"
    fetch(pokemonApiCall)
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        //this variable will be set dynamically from the pokesona quiz
        var pokePick = 2;

        findAPokemon(pokePick)
    })
}
accessPokemonApi()

//========================================================== GiphyApi

var giphyApiKey = "832va7uRpJ7h6cRIeQSDqVb72uTktwtu"

function accesssGiphyPokemonApi(pokeName) {
    var giphyPokemonApiCall = "https://api.giphy.com/v1/gifs/search?&q="+pokeName+"&api_key=" + giphyApiKey;
    fetch(giphyPokemonApiCall)
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        // var pokeGifArray = data.data
        // console.log(pokeGifArray)

        //Changing the data array [0] number will change the 
        //giphy and call different img/gifs

        //Dynamically calls pokemon imgs based off pokeName passed-in variable
        var pokeImg = data.data[10].images.original_still.url
        console.log("Pokemon Img Link: " + pokeImg)
        var imgLink = document.getElementById('pic');
        imgLink.setAttribute('src', pokeImg)

         //Dynamically calls pokemon gifs based off pokeName passed-in variable
        var pokeGiph = data.data[10].images.original.url
        console.log("Pokemon Gif Link: " + pokeGiph)
        var giphLink = document.getElementById('gif');
        giphLink.setAttribute('src', pokeGiph)

    }) 

}
