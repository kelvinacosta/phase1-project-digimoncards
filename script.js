//Create 2 variables to store the like button functionality whit an emoji context of a heart
const empyHeart = '🤍';
const fullHeart= '❤️';

//Create a variable to get the class of a html list
const digimonList = document.querySelector('.digimonList')


//Create a function to the button like event
function buttonLike(event){
    event.preventDefault()
    console.log(event)

}
//create a variable to store a fetch function and then call it
const fetchData = ()=>{

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
        digimonImage.alt = digimon.img 
        
        
        const digimonName = document.createElement('h2')
        digimonName.textContent = digimon.name
        //console.log(digimonName)

        //create a button and then add a click event to button
        const likeButton = document.createElement('button')
        likeButton.textContent = empyHeart

        //add a click event to the button
        likeButton.addEventListener('click',buttonLike)
    
        //Appending tags to list of digimon <li>
        listDigimon.appendChild(digimonImage)
        listDigimon.appendChild(digimonName)
        listDigimon.appendChild(likeButton)
        //console.log(listDigimon)
        
        digimonList.appendChild(listDigimon)
    
    
    
    
    
    }))
    //adds a catch error 
    .catch(error=>{
        console.log(error)
    })
} 

//calling function fetchdata
fetchData()