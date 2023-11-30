//Script
function accessPokemonApi() {
    var pokemonApiCall = "https://pokeapi.co/api/v2/"
    fetch(pokemonApiCall)
    .then(function (response){
        return response.json()
    })
    .then(function (data){

        console.log(data)


    })

}
accessPokemonApi()