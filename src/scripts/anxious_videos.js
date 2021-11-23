if (window.localStorage.getItem('anxious_videos') != null) {

    const professionalsProfiles = JSON.parse(window.localStorage.getItem('anxious_videos'))

    for (const profile of professionalsProfiles) {
        const newProfile = $('#professional-profile1').clone(true).appendTo($(".main-content"))

        newProfile.find('#avatar').attr('src', `../assets/${profile.avatar}`)
        newProfile.find('#name').text(profile.name)
        newProfile.find('#profession').text(profile.profession)
        newProfile.find('#site').attr('href', profile.site)
        newProfile.find('#playlist').attr('href', profile.playlist)
        newProfile.find('#about').text(profile.about)
        newProfile.find('#address').text(profile.address)
        newProfile.find('#phone').text(profile.phone)
        newProfile.find('#email').text(profile.email)
    }

    $("#professional-profile1").fadeOut(1)
    $("#professional-profile2").fadeOut(1)

}



