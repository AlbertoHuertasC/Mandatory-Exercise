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

![picture](https://github.com/AlbertoHuertasC/Mandatory-Exercise/blob/master/pictures/Final.PNG?raw=true)

![picture]()

![picture]()


`function appendLegend()
{
    var legend = svg.selectAll('.legend')
        .data(totalSales)
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) { 
          return "translate(20," + i * 25 + ")"; 
        });`








