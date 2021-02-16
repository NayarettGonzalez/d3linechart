// DATA PARA LA PRIMERA LÍNEA
let points1 = [
    [0, 20],
    [100, 250],
    [260, 90],
    [450, 40],
    [450, 140]
];

// DATA PARA LA SEGUNDA LÍNEA
let points2 = [{ x: 100, y: 100 }, { x: 130, y: 260 }, { x: 300, y: 460 }, { x: 500, y: 250 }];

// SE DEFINEN LAS DIMENSIONES PARA EL SVG
let width = 600,
    height = 500,
    spacing = 60;

// SE DEFINE EL SVG CON SUS ATRIBUTOS
let svg = d3.select("body").append("svg")
    .attr("width", width).attr("height", height)
    .append("g")
    .attr("transform", "translate(" + spacing / 2 + "," + spacing / 2 + ")");

// SE DEFINE LAS ESCALA DEL EJE X
let xScale = d3.scaleLinear()
    .domain([0, 500])
    .range([0, width - spacing]);

// SE DEFINE LA ESCALA DEL EJE Y
let yScale = d3.scaleLinear()
    .domain([0, 500])
    .range([height - spacing, 0]);

// SE DEFINE DÓNDE APARECERÁ LA LEYENDA DE LOS EJES

// SOBRE EL EJE X
let xAxis = d3.axisBottom(xScale);

// A LA IZQUIERDA DEL EJE Y
let yAxis = d3.axisLeft(yScale);

// SE DIBUJAN LOS EJES EN EL SVG
// SE DIBUJA EL EJE X
svg.append("g").attr("transform", "translate(0," + (height - spacing) + ")").call(xAxis);

// SE DIBUJA EL EJE Y
svg.append("g").call(yAxis);

// SE DEFINE LA LÍNEA 1. DATA PROVENIENTE DE UN ARRAY
let line1 = d3.line()
    .x((d) => d[0])
    .y((d) => yScale(d[1]));

// SE DEFINE LA LÍNEA 2. DATA PROVENIENTE DE UN OBJETO
let line2 = d3.line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

// SE PLOTEA LA LÍNEA 1
svg.append("path").attr("class", "line").attr("d", line1(points1)).style("stroke", "deeppink");

// SE PLOTEA LA LÍNEA 2
svg.append("path").attr("class", "line").attr("d", line2(points2)).style("stroke", "indigo");