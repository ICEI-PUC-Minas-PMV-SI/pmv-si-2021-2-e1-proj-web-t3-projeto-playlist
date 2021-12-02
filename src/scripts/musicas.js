// Esse evento é disparado quando a página é carregada.
$(document).ready(function() {

    // Armazena o endereço da api que será consumida.
    let baseUrl = 'https://api-musicas.herokuapp.com';

    // Realiza a requisição do tipo GET na api, para trazer os dados e renderizar na tela.
    $.ajax({
        url: baseUrl + '/',
        type: 'GET',
        dataType: 'json',
        success: function (result) { // Caso a API retorne o STATUS CODE na faixa 200, é considerado como sucesso.
            // Percorre o array de dados que é retornado pela api.
            result.forEach(element => {
                let imageUrl    = element.image_url;
                let description = element.description;
                let tipUrl      = element.tip_url;
                let title       = element.title;  
                $("#conteudo-api").append("<div class='card'><img class='card-img-top' src=" + imageUrl + " alt='Imagem'><div class='card-body'><h5 class='card-title'>" + title + "</h5><p class='card-text'>" + description + "</p><a href=" + tipUrl + " class='btn btn-primary btn-sm'>Acessar</a></div></div>");
            });
        },
        error: function (xhr, ajaxOptions, thrownError) { // Caso a API retorne o STATUS CODE na faixa 400 ou 500, é considerado como erro.
            // Caso aconteça algum erro ao tentar enviar a requisição, exibe esta mensagem no console do navegador.
            console.log('Erro ao tentar realizar a operação');
        }
      }
    );
 
}); 