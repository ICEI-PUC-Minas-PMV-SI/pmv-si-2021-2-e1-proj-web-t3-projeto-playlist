function getProfessionalData() {

    if (window.localStorage.getItem('depression_podcasts')) {

        const professionalsProfiles = JSON.parse(window.localStorage.getItem('depression_podcasts'))

        for (const profile of professionalsProfiles) {
            const newProfile = $('#professional-profile-boilerplate').clone(true)
                .css('visibility', 'visible')
                .attr('id', 'professional-profile').appendTo($(".main-content"))

            newProfile.find('#avatar').attr('src', `../assets/${profile.avatar}`+'.png')
            newProfile.find('#name').text(profile.name)
            newProfile.find('#profession').text(profile.profession)
            newProfile.find('#site').attr('href', profile.site)
            newProfile.find('#playlist').attr('href', profile.playlist)
            newProfile.find('#about').text(profile.about)
            newProfile.find('#address').text(profile.address)
            newProfile.find('#phone').text(profile.phone)
            newProfile.find('#email').text(profile.email)
        }
        return $("#professional-profile-boilerplate").remove()

    }
    alert('Nenhum perfil foi criado para essa categoria. Por gentileza, retorne mais tarde.')
    return window.location = '../index.html'
}

getProfessionalData()




