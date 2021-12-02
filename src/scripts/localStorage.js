document.querySelector('form').onsubmit = function (e) {

    e.preventDefault()

    var nome = document.getElementById('nome').value;
    if(nome.length < 3){
        return   alert('Insira um nome ou apelido com ao menos 3 caracteres!' )
    }

    var profissao = document.getElementById('profissao').value;
    if(profissao.length < 3) {

            return alert('Preencha sua profissão!')
        }



    var podcastsdepressao = this.podcastsdepressao.value;
    var podcastsansiedade = this.podcastsansiedade.value;
    var videodepressao = this.videodepressao.value;
    var videoansiedade = this.videoansiedade.value;
    var avatar;

    if (this.avatar1.checked)
        avatar = this.avatar1.value;
    if (this.avatar2.checked)
        avatar = this.avatar2.value;
    if (this.avatar3checked)
        avatar = this.avatar3.value;
    if (this.avatar4.checked)
        avatar = this.avatar4.value;
    if (this.avatar5.checked)
        avatar = this.avatar5.value;
    if (this.avatar6.checked)
        avatar = this.avatar6.value;
    if (this.avatar7.checked)
        avatar = this.avatar7.value;
    if (this.avatar8.checked)
        avatar = this.avatar8.value;


    if (podcastsdepressao) {

        const professionalsDataDepressionPodcasts = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.podcastsdepressao.value,
                avatar: avatar,
            }
        ]
        window.localStorage.setItem('depression_podcasts', JSON.stringify(professionalsDataDepressionPodcasts));
        window.location.href='../pages/home.html'
    }
    else if (podcastsansiedade) {
        const professionalsDataAnxiousPodcasts = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.podcastsdepressao.value,
                avatar: avatar,
            }
        ]
        window.localStorage.setItem('anxious_podcasts', JSON.stringify(professionalsDataAnxiousPodcasts));
        window.location.href='../pages/home.html'
    }
    else if (videodepressao) {
        const professionalsDataDepressionVideos = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.podcastsdepressao.value,
                avatar: avatar,
            }
        ]

        window.localStorage.setItem('depression_videos', JSON.stringify(professionalsDataDepressionVideos));
        window.location.href='../pages/home.html'
    }
    else if (videoansiedade) {
        const professionalsDataAnxiousVideos = [
            {
                name: this.nome.value,
                profession: this.profissao.value,
                address: this.endereco.value,
                degree: this.escolaridade.value,
                site: this.site.value,
                about: this.sobre.value,
                phone: this.contato.value,
                email: this.email.value,
                playlist: this.podcastsdepressao.value,
                avatar: avatar,
            }
        ]
        window.localStorage.setItem('anxious_videos', JSON.stringify(professionalsDataAnxiousVideos));
        window.location.href='../pages/home.html'
    };
    }



