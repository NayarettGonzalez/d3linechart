let points1 = [
    [0, 20],
    [100, 250],
    [260, 90],
    [450, 40],
    [450, 140]
];


let width = 600,
    height = 500,
    spacing = 60;


let svg = d3.select("body").append("svg")
    .attr("width", width).attr("height", height)
    .append("g")
    .attr("transform", "translate(" + spacing / 2 + "," + spacing / 2 + ")");

let xScale = d3.scaleLinear()
    .domain([0, 500])
    .range([0, width - spacing]);
let yScale = d3.scaleLinear()
    .domain([0, 500])
    .range([height - spacing, 0]);

let xAxis = d3.axisBottom(xScale);
let yAxis = d3.axisLeft(yScale);

svg.append("g").attr("transform", "translate(0," + (height - spacing) + ")").call(xAxis);

svg.append("g").call(yAxis);

let line1 = d3.line()
    .x((d) => d[0])
    .y((d) => yScale(d[1]));

let line2 = d3.line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

svg.append("path").attr("class", "line").attr("d", line1(points1)).style("stroke", "deeppink");