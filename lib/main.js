let url = "https://pokeapi.co/api/v2/pokemon/2"

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data)    
})
.catch(function(error){})
