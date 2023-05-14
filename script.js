//Create 2 variables to store the like button functionality whit an emoji context of a heart
const empyHeart = '🤍';
const fullHeart= '❤️';
//Create a variable to get the class of a html list
const digimonList = document.querySelector('.digimonList')
//Create a variable to get the input event
const inputSearch = document.querySelector('input[type="search"]')
const filterButton = document.getElementById('filterButton')
const filterSelect = document.getElementById('filterSelect')




//Create a function to the button like event and the numbers of click likes
function buttonLike(event){
    event.preventDefault()
    const buttonClick  = event.target 
    
    //create a counter to get the number of likes 
    let counterLikes = parseInt(buttonClick.getAttribute('data-likes'))||0
    if(buttonClick.textContent === empyHeart){

        buttonClick.textContent = fullHeart
        console.log(buttonClick)
        buttonClick.classList.add('activated-heart')
        buttonClick.classList.add('ghost-button')
        counterLikes++
        buttonClick.setAttribute('data-likes',counterLikes)
        buttonClick.textContent = `${counterLikes} ${fullHeart}`
    }else{
        buttonClick.textContent = empyHeart
        buttonClick.classList.remove('activated-heart')
        buttonClick.classList.remove('ghost-button')
        buttonClick.setAttribute('data-likes',counterLikes)
    }

}

//create a input event to search each digimon in the bar
function searchDigimons(event){
    event.preventDefault()
    //console.log(event.target.value)
    const text = event.target.value.toLowerCase()
    const digimonTarget = digimonList.querySelectorAll('li')
    let emptyChart = true
    
    //create a foreach to iterate all digimon in list 
    digimonTarget.forEach(digimonsTargets => {
        const textSearch = digimonsTargets.textContent.toLocaleLowerCase()

        if(textSearch.includes(text)){  
            digimonsTargets.style.display ='block'


        }else{
            digimonsTargets.style.display = 'none'
        }
    })
    const message = digimonList.querySelector('.noDigimonFound')  || document.createElement('p')
    message.classList.add('noDigimonFound')
    message.textContent = 'No Digimon Found....'
        
    if(emptyChart){
        digimonList.appendChild(message)
        
    }else if(message.parentNode === digimonList){
        digimonList.removeChild(message)
    }

}

//create a variable to store a fetch function and then call it
const fetchData = ()=>{

    //Fetching digimon api from data
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(res => res.json())
    .then(data => data.forEach(digimon => {
        
        //create a list of digimon to store each item
        const listDigimon = document.createElement('li')
        listDigimon.classList.add('digimon')
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
        likeButton.classList.add('like')

        //add a click event to the button
        likeButton.addEventListener('click',buttonLike)

        //Create and Get level of digimon by clicking a button

        const getLevelButton = document.createElement('button')
        getLevelButton.classList.add('level')
        getLevelButton.textContent = 'Show Level'

        //Adding a click event to level button
        getLevelButton.addEventListener('click',(event)=>{
            event.preventDefault()
            
            const digimonLevel = document.createElement('p')
            digimonLevel.textContent = `Level: ${digimon.level}` 

            const levelList = document.createElement('ul')
            //Appends level of digimon to the created list
            levelList.appendChild(digimonLevel)
            
            //Appends level list to the digimonList global
            listDigimon.appendChild(levelList)

            getLevelButton.disabled = true;
            
        })
        
    
        //Appending tags to list of digimon <li>
        listDigimon.appendChild(digimonImage)
        listDigimon.appendChild(digimonName)
        listDigimon.appendChild(getLevelButton)
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
//Calling search event
inputSearch.addEventListener('input',searchDigimons)