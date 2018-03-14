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

``` java
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
```

2. Adding colors to each bar

To do this, we have to add the color we want for each product in data.js, creating a new attribute in this way.
``` java
.attr('fill', function(d, i) {
        return d.color;
      })
```

![picture](https://github.com/AlbertoHuertasC/Mandatory-Exercise/blob/master/pictures/1.PNG?raw=true)


3. Adding space between columns

To add space between columns, we have to add "x.bandwidht" followed by the size of the space, in the attribute regarding the width

```java
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
      });
```

![picture](https://github.com/AlbertoHuertasC/Mandatory-Exercise/blob/master/pictures/Final.PNG?raw=true)



![picture]()


`<?php "Hola Mundoa"; ?>`









