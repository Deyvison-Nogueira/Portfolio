
function updateProfileINfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location' )
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updatSoftSkill(profilDate){
    const softSkils = document.getElementById('profile.skills.softSkills')
    softSkils.innerHTML = profilDate.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updatHardSkill(profilDate){
    const hardSkils = document.getElementById('profile.skills.hardSkills')
    hardSkils.innerHTML = profilDate.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

(async () =>{
    const profileData = await fecthProfileData()
    updateProfileINfo(profileData)
    updatSoftSkill(profileData)
    updatHardSkill(profileData)
})()