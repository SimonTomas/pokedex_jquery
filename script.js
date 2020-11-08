let q = 0
$(document).ready(() => {
    mountResult();

    $('#btn').click(() => {
        mountResult()
    })
})

function mountResult(){
    $.ajax(`https://pokeapi.co/api/v2/pokemon/?offset=${q}&limit=20`)
    .done(function(data){
        let results = data.results;
        $.each(results, function(key, value){
            $('#pokemons').append(`<div class="card my-2 p-3">${value.name}</div>`)
        })
        q += 20
    })
    .fail(function(e){
        if(e.status === 404){
            console.log('El recurso no existe');
        }
    })
}