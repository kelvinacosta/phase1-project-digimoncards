//Create a variable to get the class of a html list
const digimonList = document.querySelector('.digimonList')

//Fetching digimon api from data
fetch('https://digimon-api.vercel.app/api/digimon')
.then(res => res.json())
.then(data => data.forEach(digimon => {
    
    //create a list of digimon to store each item
    const listDigimon = document.createElement('li')
    listDigimon.classList.add('.digimon')
    //console.log(listDigimon)

    //Create tags name,img and level to append to the list digimon
    const digimonImage = document.createElement('img')
    digimonImage.src = digimon.img 
    
    
    const digimonName = document.createElement('h2')
    digimonName.textContent = digimon.name
    //console.log(digimonName)

    //Appending tags to list of digimon <li>
    listDigimon.appendChild(digimonImage)
    listDigimon.appendChild(digimonName)
    //console.log(listDigimon)

    digimonList.appendChild(listDigimon)





}))