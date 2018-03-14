# Modulo 7 (Data Visualization)
## Mandatory Task
### Alberto Huertas Capilla

The aim of this task is to create a new barchart from an initial barchart. The final barchart must have the following characteristics:
- Adding space between columns
- Adding colors to each bar
- Adding a legend
- Showing the chart vertically

The next barchart is the starting point to perform the exercise:

![picture](https://github.com/Lemoncode/d3js-samples/blob/master/pictures/02_Chart_Original.png?raw=true)

1. Showing the chart vertically

We have to switch X and Y axes and we can see the result in the next code:

`<?php function setupXScale()?>`
`<?php {?>`
  `<?php x = d3.scaleBand()?>`
    `<?php .rangeRound([0, width])?>`
    `<?php .domain(totalSales.map(function(d, i) {?>`
      `<?php return d.product;?>`
    `<?php }));?>`
`<?php }?>`


`<?php function setupYScale()?>`
`<?php {?>`
  `<?php var maxSales = d3.max(totalSales, function(d, i) {?>`
    `<?php return d.sales;?>`
  `<?php });?>`

  `<?php y = d3.scaleLinear()?>`
    `<?php .range([height, 0])?>`
    `<?php .domain([0, maxSales]);?>`

`<?php }?>`


`<?php function appendXAxis() {?>`
  `<?php svg.append("g")?>`
    `<?php .attr("transform",`translate(0, ${height})`)?>`
    `<?php .call(d3.axisBottom(x));?>`
`<?php }?>`

`<?php function appendYAxis() {?>`
  `<?php svg.append("g")?>`
  `<?php .call(d3.axisLeft(y));?>`
`<?php }?>`



![picture](https://github.com/AlbertoHuertasC/Mandatory-Exercise/blob/master/pictures/Final.PNG?raw=true)

![picture]()

![picture]()


`<?php "Hola Mundoa"; ?>`









