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

// console.log(deathsSeason1Array[0]["killer"])



// GET LAST DIGIT OF TOTAL DEATHS///
let totalDeath = allDeathsArray.map(i => {
    return i.order
})
  
let lastDigit = totalDeath.slice(-1).pop(); 

/// SHOWING TOTAL DEATHS IN HTML TEXT ///
function showTotalDeaths(i){
  ///Without D3
  // let div = document.querySelector('.deaths')
  // let newElement = document.createElement('h2');
  // newElement.textContent = "total deaths throughout the show: " + i;
  // div.appendChild(newElement);

  d3.select(".deaths")///method selects one element from the document
  .append("h2") ///It appends an HTML node to a selected item, and returns a handle to that node.
  .text("total deaths throughout the show: " + i);///method either sets the text of the selected node, or gets the current text.
}
showTotalDeaths(lastDigit);



/// SEASON ONE DEATHS GENERATING IN DIVS///
function generateIcons() {

  
    const numCols = 20;
    const numRows = 3;
    const width = 340;
    const height = 300;

    const yScale = d3.scaleBand()
        .range([0, width])
        .domain(d3.range(numRows))

    const xScale = d3.scaleBand()
            .range([0, height])
            .domain(d3.range(numCols))

            const gridData = d3.range(numCols*numRows)

            // console.log("gridData:", gridData)

    const svg = d3.select(".person")
                    .attr("width", width)
                    .attr("height", height)


      svg.selectAll(".person")
      .data(gridData)
      .enter()
      .append("use")
      .attr("href", "#icon")
      .attr('x', d => xScale(d % numCols))
      .attr('y', d => yScale(Math.floor(d/numCols)))
      .data(deathsSeason1Array)
      .style("fill", (i) => {
          if (i.allegiance === 'House Lannister'){
              return "#D55656";
            }
            if (i.allegiance === 'House Stark') {
              return "#8F8582";
            }
            if (i.allegiance === 'Dothraki') {
              return "#9B6F46";
            }
            if (i.allegiance === 'Night’s Watch') {
              return "#363636";
            }
            if (i.allegiance === 'House Royce, Night’s Watch') {
              return "#D28C47";
            }
            if (i.allegiance === 'None') {
              return "#99BAC7";
            }
            if (i.allegiance === 'House Arryn') {
              return "#3183B4";
            }
            if (i.allegiance === 'Free Folk') {
              return "#AEE6E6";
            }
            if (i.allegiance === 'House Clegane') {
              return "#363636";
            }
            if (i.allegiance === 'Smallfolk') {
              return "#999999";
            }
            if (i.allegiance === 'House Egen, House Arryn') {
              return "white";
            }
            if (i.allegiance === 'House Egen') {
              return "white";
            }
            if (i.allegiance === 'House Targaryen') {
              return "#9A0400";
            }
            if (i.allegiance === 'House Baratheon of King’s Landing') {
              return "#FFD200";
            }
      })
      .attr("class","icon")
      .attr("stroke", "#5D6467")
      .style("stroke-width", 1)
      .on("mouseover", (e, i) => d3
        .select("#tooltip")
        .transition()
        .duration(175)
        .style("opacity", 1)
        .text(`Death #${i.order} ` + `${i.character_killed} ` + `Allegiance: ${i.allegiance} ` + `Where: ${i.location} ` + `When: season ${i.season}, episode ${i.episode} ` + `Killer: ${i.killer} ` + `Method: ${i.method} `)
      )
      .on("mousemove", (e) => d3
        .select("#tooltip")
        .style("left", (e.pageX - 200) + "px")
        .style("top", (e.pageY - 60) + "px")
      )
      .on("mouseout", (e) => d3.select("#tooltip").style("opacity", 0));

      // console.log(deathsSeason1Array[31])
}
generateIcons();





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
    if (i.allegiance === 'House Egen, House Arryn') {
      oneDeath.style.backgroundColor = "#FFFFFF";
    }
    if (i.allegiance === 'House Targaryen') {
      oneDeath.style.backgroundColor = "#9A0400";
    }
    if (i.allegiance === 'House Baratheon of King’s Landing') {
      oneDeath.style.backgroundColor = "#FFD200";
    }

    let moreInfoHtml = ` 
    <div class="toolTip">
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

// generateCircle()




// const imgElement = document.querySelector(".logo-background").style.backgroundImage =  "url(./images/targaryen-logo.png)";
// const images = [
//   "../images/arryn-logo.png", 
//   "../images/baratheon-logo.png", 
//   "../images/greyjoy-logo.png", 
//   "../images/lannister-logo.png", 
//   "../images/martell-logo.png", 
//   "../images/stark-logo.png",
//   "../images/targaryen-logo.png",
//   "../images/tully-logo.png",
//   "../images/tyrell-logo.png"
// ];



  

function changeBgColor()	{
  const div = document.querySelector("body");
  const images = ["#565656", 
  "#e12812", 
  "#00173d", 
  "#ffe147", 
  "#000", 
  "#121745",
  "#050"];

  const bg = images[Math.floor(Math.random() * images.length)];

  div.style.backgroundColor = bg;

}

setInterval(changeBgColor, 4200)


function changeBg()	{
  const div = document.querySelector(".logo-background");
  const images = ["../images/arryn-logo.png", 
  "../images/baratheon-logo.png", 
  "../images/greyjoy-logo.png", 
  "../images/lannister-logo.png", 
  "../images/martell-logo.png", 
  "../images/stark-logo.png",
  "../images/targaryen-logo.png",
  "../images/tully-logo.png",
  "../images/tyrell-logo.png"];

  const bg = images[Math.floor(Math.random() * images.length)];

  div.style.backgroundImage = bg;

}

setInterval(changeBg, 1000)
