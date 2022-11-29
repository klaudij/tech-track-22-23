// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'
import 'animate.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// We can use node_modules directely in the browser!
import * as d3 from 'd3';
import CONFIG from './config.js';
import request from './request.js';
import { killerFill, iconFill } from './colorFills.js';


async function start() {
  const data = await request(CONFIG.url);

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


  /// SHOWING TOTAL DEATHS IN HTML TEXT ///
  function showTotalDeaths(){
    d3.select(".death-counter")///method selects one element from the document///It appends an HTML node to a selected item, and returns a handle to that node.
    .html("<h2>total deaths throughout the show: </h2> <p id='numbers'>0</p>");///method either sets the text of the selected node, or gets the current text.
    
    var startCount = 0,
    num = {var:startCount};

    gsap.timeline({
      scrollTrigger: {
        trigger: "#numbers",
        pinSpacing: false,
        start: function() {
          return document.querySelector('.allDeaths').offsetwidth;
        },
        end: function() {
          return document.querySelector('#section1').offsetHeight;
        },
        scrub: 1, 
        //markers:true,
        toggleClass: {targets: '#numbers', className: "counting"},
        pin: true
        }
    })
    .to(num, {var: 6887, duration: 21, ease:"none", onUpdate:changeNumber})
    .to({}, {duration:1})

    function changeNumber() {
    numbers.innerHTML = (num.var).toFixed();
    }
  }

  showTotalDeaths();




  /// SEASON ONE DEATHS GENERATING IN SVG's///
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
        .style("fill", iconFill)
        .attr("class","oneDeathHover")
        .attr("stroke", "#5D6467")
        .style("stroke-width", 1)
        .on("mouseover", (e, i) =>  
          d3.select("#tooltip1")
          .html("<p>Death #" + i.order +"</p> <h2>" + i.character_killed + "</h2><p><strong>Allegiance: </strong>" + i.allegiance + "</p>" + "<p><strong>When: </strong>season " + i.season + ", episode " + i.episode + "</p> <p><strong>Killer: </strong>" + i.killer + "</p> <p><strong>Method: </strong>" + i.method + "</p>")
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




        gsap.from('.oneDeathHover', {
              scrollTrigger : { // ScrollTrigger function
                trigger: ".allDeaths", /// Here i want the scroll to be triggered on the SVG
                start:"top 128px", // Positioning for when the scoll trigger should start
                end: "bottom 400px",// Positioning for when the scoll trigger should end
                //markers: true, /// only during development!
                scrub: 1, ///Locks the animation to scroll. 
            
              }, /// Animation that plays for each icon when it appears on screen
              y: -50,
              display: 'none',
              stagger: .25,
              duration: .25
        });
  }
  generateIcons();


  
  gsap.set("#section2", {opacity: 0, y: -50});

  ScrollTrigger.batch("#section2", {
    onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.25,duration: 1}),
    onLeave: batch => gsap.to(batch, {opacity: 0, y: -50}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.25, duration: 1}),
    onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: -50}),

    start: "top 9%",
    end: "bottom 20%",
    //markers: true,
  });




  function whoKilledMost(){
  // DATA
  ///Who has the most kills - using D3
  // Creating new data array with map function
  const allKillers = d3.rollups(allDeathsArray, v => v.length, d => d.killer).map(i => {
    return {
      name: i[0],
      totalKills: i[1]
    }
  })
  console.log(allKillers)


  // set the dimensions and margins of the graph
  var width = 960
  var height = 650

  // append the svg object to the body of the page
  var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", 960)
      .attr("height", 650)


    // Size scale for circles
    var size = d3.scaleLinear()
      .domain([0, 1426])
      .range([10,66])  // circle will be between 7 and 55 px wide


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
        .style("fill", killerFill)
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
      .on("mouseout", (e) =>  d3.select("#tooltip1").style("opacity", 0))
      .call(d3.drag() // call specific function when circle is dragged
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));


    // Features of the forces applied to the nodes:
    var simulation = d3.forceSimulation()
        .force("center", d3.forceCenter().x(width / 2).y(height / 2.2)) // Attraction to the center of the svg area
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

        
    // What happens when a circle is dragged?
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = Math.max(0, Math.min(width, event.x));
      d.fy = Math.max(0, Math.min(height, event.y));
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(.03);
      d.fx = null;
      d.fy = null;
    }
  }
  whoKilledMost();
}
start();