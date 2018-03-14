// Let's start using ES6
// And let's organize the code following clean code concepts
// Later one we will complete a version using imports + webpack

// Isolated data array to a different file

let margin = null,
    width = null,
    height = null;

let svg = null;
let x, y = null; 

setupCanvasSize();
appendSvg("body");
setupXScale();
setupYScale();
appendXAxis();
appendYAxis();
appendChartBars();



function setupCanvasSize() {
  margin = {top: 120, left: 200, bottom: 150, right: 140};
  width = 860 - margin.left - margin.right;
  height = 700 - margin.top - margin.bottom;
}

function appendSvg(domElement) {
  svg = d3.select(domElement).append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform",`translate(${margin.left}, ${margin.top})`);

}


function setupXScale()
{
  x = d3.scaleBand()
    .rangeRound([0, width])
    .domain(totalSales.map(function(d, i) {
      return d.product;
    }));
}



function setupYScale()
{
  var maxSales = d3.max(totalSales, function(d, i) {
    return d.sales;
  });

  y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, maxSales]);

}


function appendXAxis() {
  svg.append("g")
    .attr("transform",`translate(0, ${height})`)
    .call(d3.axisBottom(x));
}

function appendYAxis() {
  svg.append("g")
  .call(d3.axisLeft(y));
}

function appendChartBars()
{
  var rects = svg.selectAll('rect')
    .data(totalSales);

    var newRects = rects.enter();

    newRects.append('rect')
      .attr('x', function(d, i) {
        return x(d.product);
      })
      .attr('y', function(d, i) {
        return y(d.sales);
      })     
      .attr('height', function(d, i) {
        return height - y(d.sales);
      })
      .attr('width', x.bandwidth) 
      .attr('width', function(d, i) {
        return x.bandwidth() -15;
      })
      .attr('fill', function(d, i) {
        return d.color;
      })    
      ;

}
