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
    order: parseInt(i.order),
    season: parseInt(i.season),
    episode: parseInt(i.episode),
    character_killed: i.character_killed,
    allegiance: i.allegiance.split(','),
    killer: i.killer,
    method: i.method,
    location: i.location
  }
})


// const deathsSeason1Array = allDeathsArray.filter (i => {
//   return i.season === 8;
// })

// console.log(deathsSeason1Array)



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

  d3.select(".death-counter")///method selects one element from the document
  .append("p") ///It appends an HTML node to a selected item, and returns a handle to that node.
  .text("total deaths throughout the show: " + i);///method either sets the text of the selected node, or gets the current text.
}
showTotalDeaths(lastDigit);



/// SEASON ONE DEATHS GENERATING IN DIVS///
function generateIcons() {
    const numRows = 83;
    const numCols = 83;
    const width = 960;
    const height = 3000;

    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(d3.range(numRows + 1))


    const yScale = d3.scaleBand()
            .range([0, height])
            .domain(d3.range(numCols + 3))

    const gridData = d3.range(numCols*numRows)

    // console.log(gridData);

 // console.log("gridData:", gridData)

    const svg = d3.select(".allDeaths")
                    .attr("width", width)
                    .attr("height", height)


      svg.selectAll(".allDeaths")
      .data(gridData)
      .enter()
      .append("use")
      .attr("href", "#oneDeath")
      .attr('x', d => xScale(d % numCols))
      .attr('y', d => yScale(Math.floor(d/numCols)))
      .data(allDeathsArray)
      .style("fill", (i) => {
          if (i.allegiance[0] === 'House Lannister'){ /// SEASON 1
              return "#D55656";
            }
            if (i.allegiance[0] === 'House Stark') {
              return "#8F8582";
            }
            if (i.allegiance[0] === 'Dothraki') {
              return "#9B6F46";
            }
            if (i.allegiance[0] === 'Night’s Watch') {
              return "#363636";
            }
            if (i.allegiance[0] === 'House Royce') {
              return "#D28C47";
            }
            if (i.allegiance[0] === 'None') {
              return "#99BAC7";
            }
            if (i.allegiance[0] === 'House Arryn') {
              return "#3183B4";
            }
            if (i.allegiance[0] === 'Free Folk') {
              return "#AEE6E6";
            }
            if (i.allegiance[0] === 'House Clegane') {
              return "#363636";
            }
            if (i.allegiance[0] === 'Smallfolk') {
              return "#999999";
            }
            if (i.allegiance[0] === 'House Egen') {
              return "white";
            }
            if (i.allegiance[0] === 'House Targaryen') {
              return "#9A0400";
            }
            if (i.allegiance[0] === 'House Baratheon of King’s Landing') {
              return "#FFD200";
            }
            if (i.allegiance[0] === 'House Baratheon of Storm’s End') { /// SEASON 2
              return "#FFD200";
            }
            if (i.allegiance[0] === 'House Baratheon of Dragonstone') { 
              return "#D55656";
            }
            if (i.allegiance[0] === 'House Cassel') { 
              return "#999999";
            }
            if (i.allegiance[0] === 'Faith of the Seven') { 
              return "#BB926F";
            }
            if (i.allegiance[0] === 'House Greyjoy') { 
              return "#FAF600";
            }
            if (i.allegiance[0] === 'House Karstark') { 
              return "#363636";
            }
            if (i.allegiance[0] === 'The Thirteen') { 
              return "#2C7AA8";
            }
            if (i.allegiance[0] === 'House Moore') { 
              return "#D28C47";
            }
            if (i.allegiance[0] === 'House Seaworth') { 
              return "pink";
            }
            if (i.allegiance[0] === 'Warlocks of Qarth') { 
              return "#A168A1";
            }
            if (i.allegiance[0] === 'House Tully') { /// SEASON 3
              return "#1F2B70";
            }
            if (i.allegiance[0] === 'House Mormont') { 
              return "pink";
            }
            if (i.allegiance[0] === 'Good Masters') { 
              return "#ADD486";
            }
            if (i.allegiance[0] === 'Brotherhood Without Banners') { 
              return "#FFFFFF";
            }
            if (i.allegiance[0] === 'The Lord of Light') { 
              return "#FFFFFF";
            }
            if (i.allegiance[0] === 'Varys') { 
              return "#F0F992";
            }
            if (i.allegiance[0] === 'House Baelish') { 
              return "#C4FA3E";
            }
            if (i.allegiance[0] === 'Second Sons') { 
              return "#D0D0D0";
            }
            if (i.allegiance[0] === 'Wise Masters') { 
              return "#AEE6E6";
            }
            if (i.allegiance[0] === 'House Bolton') { 
              return "#E4A2BC";
            }
            if (i.allegiance[0] === 'House Frey') { 
              return "#313A7B";
            }
            if (i.allegiance[0] === 'House Florent') { /// SEASON 4
              return "#E96325";
            }
            if (i.allegiance[0] === 'House Hollard') { 
              return "#4B82F9";
            }
            if (i.allegiance[0] === 'Great Masters') { 
              return "#FFD24C";
            }
            if (i.allegiance[0] === 'House Reed') { 
              return "#9AAD82";
            }
            if (i.allegiance[0] === 'Thenn') { 
              return "#7A7A7A";
            }
            if (i.allegiance[0] === 'House Kenning') { 
              return "#F89A2F";
            }
            if (i.allegiance[0] === 'House Martell') { 
              return "#E98238";
            }
            if (i.allegiance[0] === 'Sons of the Harpy') { /// SEASON 5
              return "#85BAC1";
            }
            if (i.allegiance[0] === 'Faceless Men') { 
              return "#3C3C3C";
            }
            if (i.allegiance[0] === 'Faith Militant') {  /// SEASON 6
              return "#691720";
            }
            if (i.allegiance[0] === 'House Hightower') { 
              return "#4B5956";
            }
            if (i.allegiance[0] === 'House Dayne') { 
              return "#63023A";
            }
            if (i.allegiance[0] === 'Children of the Forest') { 
              return "#A4D8A6";
            }
            if (i.allegiance[0] === 'House Umber') { 
              return "#A01D20";
            }
            if (i.allegiance[0] === 'Unknown') { 
              return "#947688";
            }
            if (i.allegiance[0] === 'House Tyrell') { 
              return "#8B9B7B";
            }
            if (i.allegiance[0] === 'Triarchs of Volantis') { 
              return "#D0D0D0";
            }
            if (i.allegiance[0] === 'House Greyjoy (Yara-aligned)') { /// SEASON 7
              return "#FFD602";
            }
            if (i.allegiance[0] === 'House Greyjoy (Euron-aligned)') { 
              return "#D4B114";
            }
            if (i.allegiance[0] === 'House Tarly') { 
              return "#5F681F";
            }
            if (i.allegiance[0] === 'Golden Company') {  /// SEASON 8
              return "#CDA80E";
            }
            if (i.allegiance[0] === 'Kingsguard') { 
              return "#E0DED0";
            }
      })
      .attr("class","oneDeathHover")
      .attr("stroke", "#5D6467")
      .style("stroke-width", 1)
      .on("mouseover", (e, i) =>  
        d3.select("#tooltip1")
        .html("<p>Death #" + i.order +"</p> <h2>" + i.character_killed + "</h2><p><strong>Allegiance: </strong>" + i.allegiance + "</p>" + "<p><strong>When: </strong>season" + i.season + ", episode " + i.episode + "</p> <p><strong>Killer: </strong>" + i.killer + "</p> <p><strong>Method: </strong>" + i.method + "</p>")
        .transition()
        .duration(175)
        .style("opacity", 1)
      )
      .on("mousemove", (e) => 
         d3.select("#tooltip1")
        .style("left", (e.pageX + 20) + "px")
        .style("top", (e.pageY + 1) + "px")
      )
      .on("mouseout", (e) =>  d3.select("#tooltip1").style("opacity", 0));

      // console.log(deathsSeason1Array[31])
}
generateIcons();




/// calculate the average number of deaths for each allegiance
// console.log(d3.rollups(deathsSeason1Array, e => d3.sum(e, i => i.season), i => i.allegiance).sort(d3.ascending))



function whoKilledMost(){
// DATA
///Who has the most kills - by using D3
// Creating new data array with map function
const allKillers = d3.rollups(allDeathsArray, v => v.length, d => d.killer).map(i => {
  return {
    name: i[0],
    totalKills: i[1]
  }
})
// console.log(allKillers)


// set the dimensions and margins of the graph
var width = 550
var height = 550

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", 550)
    .attr("height", 550)


  // Size scale for countries
  var size = d3.scaleLinear()
    .domain([0, 1426])
    .range([7,60])  // circle will be between 7 and 55 px wide


    var color = d3.scaleOrdinal()
    .domain([0, 1426])
    .range(d3.schemeSet2);


  // Initialize the circle: all located at the center of the svg area
  var node = svg.append("g")
    .selectAll("circle")
    .data(allKillers)
    .enter()
    .append("circle")
      .attr("class", "node")
      .attr("r", function(d){ return size(d.totalKills)})
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .style("fill", function(d){ return color(d.totalKills)})
      .style("fill-opacity", 0.8)
      .attr("stroke", "black")
      .style("stroke-width", 1)
      .on("mouseover", (e, i) =>  
      d3.select("#tooltip1")
      .html("<p><u>" + i.name +"</u></p>" + "<p>" + i.totalKills + " kills</p>")
      .transition()
      .duration(175)
      .style("opacity", 1)
    )
    .on("mousemove", (e) => 
       d3.select("#tooltip1")
      .style("left", (e.pageX + 20) + "px")
      .style("top", (e.pageY + 1) + "px")
    )
    .on("mouseout", (e) =>  d3.select("#tooltip1").style("opacity", 0));
    // .call(d3.drag() // call specific function when circle is dragged
    // .on("start", dragstarted)
    // .on("drag", dragged)
    // .on("end", dragended));




  // Features of the forces applied to the nodes:
  var simulation = d3.forceSimulation()
      .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
      .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
      .force("collide", d3.forceCollide().strength(.1).radius(function(d){ return (size(d.totalKills)+6) }).iterations(5)) // Force that avoids circle overlapping

  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  simulation
      .nodes(allKillers)
      .on("tick", function(d){
        node
            .attr("cx", function(d){ return d.x; })
            .attr("cy", function(d){ return d.y; })
      });


//  // What happens when a circle is dragged?
//  function dragstarted(d) {
//   if (!d3.event.active) simulation.alphaTarget(.03).restart();
//   d.fx = d.x;
//   d.fy = d.y;
// }
// function dragged(d) {
//   d.fx = d3.event.x;
//   d.fy = d3.event.y;
// }
// function dragended(d) {
//   if (!d3.event.active) simulation.alphaTarget(.03);
//   d.fx = null;
//   d.fy = null;
// }


}
whoKilledMost();












///Function for changing the background color & image
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
  const images = ["url('../images/arryn-logo.png')", 
  "url('../images/baratheon-logo.png')", 
  "url('../images/greyjoy-logo.png')", 
  "url('../images/lannister-logo.png')", 
  "url('../images/martell-logo.png')", 
  "url('../images/stark-logo.png')",
  "url('../images/targaryen-logo.png')",
  "url('../images/tully-logo.png')",
  "url('../images/tyrell-logo.png')"]; 

  const bg = images[Math.floor(Math.random() * images.length)];

  div.style.backgroundImage = bg;
}

setInterval(changeBg, 4200)








function generateCircle() {
  let area = document.querySelector('.theDead');

  allDeathsArray.forEach(i => {
  let oneDeath = document.createElement('div');
  oneDeath.classList.add('personWhoDied');  

  if (i.allegiance[0] === 'House Lannister'){ /// SEASON 1
    oneDeath.style.backgroundColor =  "#D55656";
  }
  if (i.allegiance[0] === 'House Stark') {
    oneDeath.style.backgroundColor =  "#8F8582";
  }
  if (i.allegiance[0] === 'Dothraki') {
    oneDeath.style.backgroundColor =  "#9B6F46";
  }
  if (i.allegiance[0] === 'Night’s Watch') {
    oneDeath.style.backgroundColor =  "#363636";
  }
  if (i.allegiance[0] === 'House Royce') {
    oneDeath.style.backgroundColor =  "#D28C47";
  }
  if (i.allegiance[0] === 'None') {
    oneDeath.style.backgroundColor =  "#99BAC7";
  }
  if (i.allegiance[0] === 'House Arryn') {
    oneDeath.style.backgroundColor =  "#3183B4";
  }
  if (i.allegiance[0] === 'Free Folk') {
    oneDeath.style.backgroundColor =  "#AEE6E6";
  }
  if (i.allegiance[0] === 'House Clegane') {
    oneDeath.style.backgroundColor =  "#363636";
  }
  if (i.allegiance[0] === 'Smallfolk') {
    oneDeath.style.backgroundColor =  "#999999";
  }
  if (i.allegiance[0] === 'House Egen') {
    oneDeath.style.backgroundColor =  "white";
  }
  if (i.allegiance[0] === 'House Targaryen') {
    oneDeath.style.backgroundColor =  "#9A0400";
  }
  if (i.allegiance[0] === 'House Baratheon of King’s Landing') {
    oneDeath.style.backgroundColor =  "#FFD200";
  }
  if (i.allegiance[0] === 'House Baratheon of Storm’s End') { /// SEASON 2
    oneDeath.style.backgroundColor =  "#FFD200";
  }
  if (i.allegiance[0] === 'House Baratheon of Dragonstone') { 
    oneDeath.style.backgroundColor =  "#D55656";
  }
  if (i.allegiance[0] === 'House Cassel') { 
    oneDeath.style.backgroundColor =  "#999999";
  }
  if (i.allegiance[0] === 'Faith of the Seven') { 
    oneDeath.style.backgroundColor =  "#BB926F";
  }
  if (i.allegiance[0] === 'House Greyjoy') { 
    oneDeath.style.backgroundColor =  "#FAF600";
  }
  if (i.allegiance[0] === 'House Karstark') { 
    oneDeath.style.backgroundColor =  "#363636";
  }
  if (i.allegiance[0] === 'The Thirteen') { 
    oneDeath.style.backgroundColor =  "#2C7AA8";
  }
  if (i.allegiance[0] === 'House Moore') { 
    oneDeath.style.backgroundColor =  "#D28C47";
  }
  if (i.allegiance[0] === 'House Seaworth') { 
    oneDeath.style.backgroundColor =  "pink";
  }
  if (i.allegiance[0] === 'Warlocks of Qarth') { 
    oneDeath.style.backgroundColor =  "#A168A1";
  }
  if (i.allegiance[0] === 'House Tully') { /// SEASON 3
    oneDeath.style.backgroundColor =  "#1F2B70";
  }
  if (i.allegiance[0] === 'House Mormont') { 
    oneDeath.style.backgroundColor =  "pink";
  }
  if (i.allegiance[0] === 'Good Masters') { 
    oneDeath.style.backgroundColor =  "#ADD486";
  }
  if (i.allegiance[0] === 'Brotherhood Without Banners') { 
    oneDeath.style.backgroundColor =  "#FFFFFF";
  }
  if (i.allegiance[0] === 'The Lord of Light') { 
    oneDeath.style.backgroundColor =  "#FFFFFF";
  }
  if (i.allegiance[0] === 'Varys') { 
    oneDeath.style.backgroundColor =  "#F0F992";
  }
  if (i.allegiance[0] === 'House Baelish') { 
    oneDeath.style.backgroundColor =  "#C4FA3E";
  }
  if (i.allegiance[0] === 'Second Sons') { 
    oneDeath.style.backgroundColor =  "#D0D0D0";
  }
  if (i.allegiance[0] === 'Wise Masters') { 
    oneDeath.style.backgroundColor =  "#AEE6E6";
  }
  if (i.allegiance[0] === 'House Bolton') { 
    oneDeath.style.backgroundColor =  "#E4A2BC";
  }
  if (i.allegiance[0] === 'House Frey') { 
    oneDeath.style.backgroundColor =  "#313A7B";
  }
  if (i.allegiance[0] === 'House Florent') { /// SEASON 4
    oneDeath.style.backgroundColor =  "#E96325";
  }
  if (i.allegiance[0] === 'House Hollard') { 
    oneDeath.style.backgroundColor =  "#4B82F9";
  }
  if (i.allegiance[0] === 'Great Masters') { 
    oneDeath.style.backgroundColor =  "#FFD24C";
  }
  if (i.allegiance[0] === 'House Reed') { 
    oneDeath.style.backgroundColor =  "#9AAD82";
  }
  if (i.allegiance[0] === 'Thenn') { 
    oneDeath.style.backgroundColor =  "#7A7A7A";
  }
  if (i.allegiance[0] === 'House Kenning') { 
    oneDeath.style.backgroundColor =  "#F89A2F";
  }
  if (i.allegiance[0] === 'House Martell') { 
    oneDeath.style.backgroundColor =  "#E98238";
  }
  if (i.allegiance[0] === 'Sons of the Harpy') { /// SEASON 5
    oneDeath.style.backgroundColor =  "#85BAC1";
  }
  if (i.allegiance[0] === 'Faceless Men') { 
    oneDeath.style.backgroundColor =  "#3C3C3C";
  }
  if (i.allegiance[0] === 'Faith Militant') {  /// SEASON 6
    oneDeath.style.backgroundColor =  "#691720";
  }
  if (i.allegiance[0] === 'House Hightower') { 
    oneDeath.style.backgroundColor =  "#4B5956";
  }
  if (i.allegiance[0] === 'House Dayne') { 
    oneDeath.style.backgroundColor =  "#63023A";
  }
  if (i.allegiance[0] === 'Children of the Forest') { 
    oneDeath.style.backgroundColor =  "#A4D8A6";
  }
  if (i.allegiance[0] === 'House Umber') { 
    oneDeath.style.backgroundColor =  "#A01D20";
  }
  if (i.allegiance[0] === 'Unknown') { 
    oneDeath.style.backgroundColor =  "#947688";
  }
  if (i.allegiance[0] === 'House Tyrell') { 
    oneDeath.style.backgroundColor =  "#8B9B7B";
  }
  if (i.allegiance[0] === 'Triarchs of Volantis') { 
    oneDeath.style.backgroundColor =  "#D0D0D0";
  }
  if (i.allegiance[0] === 'House Greyjoy (Yara-aligned)') { /// SEASON 7
    oneDeath.style.backgroundColor =  "#FFD602";
  }
  if (i.allegiance[0] === 'House Greyjoy (Euron-aligned)') { 
    oneDeath.style.backgroundColor =  "#D4B114";
  }
  if (i.allegiance[0] === 'House Tarly') { 
    oneDeath.style.backgroundColor =  "#5F681F";
  }
  if (i.allegiance[0] === 'Golden Company') {  /// SEASON 8
    oneDeath.style.backgroundColor =  "#CDA80E";
  }
  if (i.allegiance[0] === 'Kingsguard') { 
    oneDeath.style.backgroundColor =  "#E0DED0";
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

