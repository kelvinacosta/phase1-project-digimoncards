//Fetching digimon api from data
fetch('https://digimon-api.vercel.app/api/digimon')
.then(res => res.json())
.then(data => console.log(data))