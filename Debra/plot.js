// Sort the data by State descending
let mazedata = data.sort((a, b) => b.state - a.state);

// Slice the first 10 objects for plotting
// slicedData = sortedBymuseums.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// Trace1 for the State Data
let colors = ['#ee204d','#1f75fe', '#fce883','#ff7538', '#1cac78', '#926eae', '#c0448f', '#ff5349', '#c5e384',
'#7366bd', '#ffb653', '#199ebd', '#fdd9b5', '#5d76cd', '#1dacd6', '#80daeb', '#faa76c','#9d81ba', '#ff9baa', '#a8e4a0',
'#ef98aa', '#cd4a4a', '#9aceeb', '#f664af', '#c0448f', '#fc89ac', '#e7c697', '#77dde7', '#8e4584', '#cb4154', '#cdc5c2', 
'#c8385a','#fdfc74', '#1974d2', '#ff48d0','#ca3767', '#45cea2', '#7851a9', '#fc74fd', '#de5d83',
'#efdbc5', '#cc6666', '#7442c8', '#71bc78','#e6335f', '#fd7c6e', '#FA9C44', '#FFDB00', '#fed8b1', '#ff7a00'  
]
let trace1 = {
  x: reversedData.map(object => object.state),
  y: reversedData.map(object => object.total_museums),
  text: reversedData.map(object => object.state),
  name: "Total Museums by State",
  type: "bar",
  orientation: "h",
  mode: 'markers',
  marker: {
      color: colors
  }
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let bardata = [trace1];

// Apply a title to the layout
let barlayout = {
  title: "Total Museums by State",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", bardata, barlayout);