// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'



// We can use node_modules directely in the browser!
import * as d3 from 'd3';
import CONFIG from './config.js';
import request from './request.js';
import generateTable from './make.js';

const data = await request(CONFIG.url);

console.log('Hello, world!');

// console.log(data);


const allDeathsArray = data.map(i => {
  return {
    order: i.order,
    season: i.season,
    episode: i.episode,
    character_killed: i.character_killed,
    allegiance: i.allegiance,
    killer: i.killer,
    method: i.method,
    location: i.location
  }
})
// console.log(allDeathsArray);


const deathsSeason1Array = allDeathsArray.filter (i => {
  return i.season <= "1";
})






// console.log(totalDeath);
// const deathString = JSON.stringify(totalDeath); 
// console.log(deathString);


// GET LAST DIGIT OF TOTAL DEATHS///
const totalDeath = allDeathsArray.map(i => {
  return i.order
})

const lastDigit = totalDeath.slice(-1).pop(); 
console.log(lastDigit);

/// SHOWING TOTAL DEATHS IN HTML TEXT ///
function totalDeathOne(i){
  let div = document.querySelector('.deaths')
  let newElement = document.createElement('h2');
  newElement.textContent = "total deaths throughout the show: " + i;
  div.appendChild(newElement);
}
totalDeathOne(lastDigit);



/// SEASON ONE DEATHS GENERATING IN DIVS///
function generateCircle() {
  let area = document.querySelector('.theDead');

  deathsSeason1Array.forEach(i => {
    let oneDeath = document.createElement('div');
    oneDeath.classList.add('personWhoDied');  

    if (i.allegiance === 'House Lannister'){
      oneDeath.style.backgroundColor = "#D55656";
    }
    if (i.allegiance === 'House Stark') {
      oneDeath.style.backgroundColor = "#8F8582";
    }
    if (i.allegiance === 'Dothraki') {
      oneDeath.style.backgroundColor = "#9B6F46";
    }
    if (i.allegiance === 'Night’s Watch') {
      oneDeath.style.backgroundColor = "#363636";
    }
    if (i.allegiance === 'House Royce, Night’s Watch') {
      oneDeath.style.backgroundColor = "#D28C47";
    }
    if (i.allegiance === 'None') {
      oneDeath.style.backgroundColor = "#99BAC7";
    }
    if (i.allegiance === 'House Arryn') {
      oneDeath.style.backgroundColor = "#3183B4";
    }
    if (i.allegiance === 'Free Folk') {
      oneDeath.style.backgroundColor = "#AEE6E6";
    }
    if (i.allegiance === 'House Clegane') {
      oneDeath.style.backgroundColor = "#363636";
    }
    if (i.allegiance === 'Smallfolk') {
      oneDeath.style.backgroundColor = "#999999";
    }
    if (i.allegiance === 'House Egen') {
      oneDeath.style.backgroundColor = "red";
    }
    if (i.allegiance === 'House Targaryen') {
      oneDeath.style.backgroundColor = "#9A0400";
    }
    if (i.allegiance === 'House Baratheon of King’s Landing') {
      oneDeath.style.backgroundColor = "#FFD200";
    }

    let moreInfoHtml = ` 
    <div class="moreInfo">
      <p>Death #${i.order}</p>
      <h2>${i.character_killed}</h2>
      <p><strong>Allegiance: </strong>${i.allegiance}</p>
      <p><strong>Where: </strong>${i.location}</p>
      <p><strong>When: </strong>season ${i.season}, episode ${i.episode}</p>
      <p><strong>Killer: </strong>${i.killer}</p>
      <p><strong>Method: </strong>${i.method}</p>
    </div>`;


    oneDeath.insertAdjacentHTML('beforeend', moreInfoHtml);
    area.appendChild(oneDeath);
  })

}
generateCircle();
