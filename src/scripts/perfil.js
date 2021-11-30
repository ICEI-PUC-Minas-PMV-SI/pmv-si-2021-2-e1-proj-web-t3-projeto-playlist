// carrega os dados na pagina de perfil
window.onload = function () {

    var local = JSON.parse(localStorage.getItem('depression_podcasts'));

    if (local != null) {

        local.forEach(item => {
            document.getElementById('nome').value = local[0].name
            document.getElementById('profissao').value = local[0].profession
            document.getElementById('endereco').value = local[0].address
            document.getElementById('escolaridade').value = local[0].degree
            document.getElementById('site').value = local[0].site
            document.getElementById('sobre').value = local[0].about
            document.getElementById('contato').value = local[0].phone
            document.getElementById('email').value = local[0].email
            document.getElementById('podcastsdepressao').value = local[0].playlist
            if (item.avatar != null)
                document.getElementById(local[0].avatar).checked = true
        });       
    }
}
