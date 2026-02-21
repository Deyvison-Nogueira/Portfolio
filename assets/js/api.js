
async function fecthProfileData(){
    const url = 'https://raw.githubusercontent.com/Deyvison-Nogueira/Portfolio/refs/heads/main/data/profile.json'
    const fecthing = await fetch(url)
    return await fecthing.json()

}