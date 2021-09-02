data = [
    {
        'state': 'CA', 'total_museums': 2489
    },
    {
        'state': 'NY', 'total_museums': 2117
    },
    {
        'state': 'TX', 'total_museums': 1760
    },
    {
        'state': 'PA', 'total_museums': 1569
    },
    {
        'state': 'OH', 'total_museums': 1282
    },
    {
        'state': 'IL', 'total_museums': 1214
    },
    {
        'state': 'FL', 'total_museums': 1041
    },
    {
        'state': 'MA', 'total_museums': 990
    },
    {
        'state': 'MI', 'total_museums': 957
    },
    {
        'state': 'VA', 'total_museums': 908
    },
    {
        'state': 'WI', 'total_museums': 815
    },
    {
        'state': 'NC', 'total_museums': 742
    },
    {
        'state': 'NJ', 'total_museums': 715
    },
    {
        'state': 'MO', 'total_museums': 712
    },
    {
        'state': 'WA', 'total_museums': 673
    },
    {
        'state': 'IN', 'total_museums': 659
    },
    {
        'state': 'MN', 'total_museums': 643
    },
    {
        'state': 'IA', 'total_museums': 629
    },
    {
        'state': 'GA', 'total_museums': 624
    },
    {
        'state': 'CO', 'total_museums': 612
    },
    {
        'state': 'MD', 'total_museums': 583
    },
    {
        'state': 'OR', 'total_museums': 523
    },
    {
        'state': 'TN', 'total_museums': 515
    },
    {
        'state': 'CT', 'total_museums': 512
    },
    {
        'state': 'KS', 'total_museums': 508
    },
    {
        'state': 'ME', 'total_museums': 504
    },
    {
        'state': 'OK', 'total_museums': 469
    },
    {
        'state': 'AL', 'total_museums': 443
    },
    {
        'state': 'KY', 'total_museums': 435
    },
    {
        'state': 'AZ', 'total_museums': 418
    },
    {
        'state': 'LA', 'total_museums': 365
    },
    {
        'state': 'SC', 'total_museums': 361
    },
    {
        'state': 'NH', 'total_museums': 346
    },
    {
        'state': 'NE', 'total_museums': 321
    },
    {
        'state': 'NM', 'total_museums': 306
    },
    {
        'state': 'AR', 'total_museums': 300
    },
    {
        'state': 'VT', 'total_museums': 282
    },
    {
        'state': 'ND', 'total_museums': 259
    },
    {
        'state': 'MT', 'total_museums': 258
    },
    {
        'state': 'WV', 'total_museums': 250
    },
    {
        'state': 'MS', 'total_museums': 236
    },
    {
        'state': 'SD', 'total_museums': 219
    },
    {
        'state': 'ID', 'total_museums': 196
    },
    {
        'state': 'WY', 'total_museums': 177
    },
    {
        'state': 'DC', 'total_museums': 173
    },
    {
        'state': 'RI', 'total_museums': 168
    },
    {
        'state': 'NV', 'total_museums': 156
    },
    {
        'state': 'AK', 'total_museums': 148
    },
    {
        'state': 'HI', 'total_museums': 144
    },
    {
        'state': 'UT', 'total_museums': 144
    },
    {
        'state': 'DE', 'total_museums': 117
    }
]

// Grab the data
names = data.map(function (row) {
    console.log(row.state)
});

console.log(data)

// Trace1 for the State Data
let colors = ['#ee204d', '#1f75fe', '#fce883', '#ff7538', '#1cac78', '#926eae', '#c0448f', '#ff5349', '#c5e384',
    '#7366bd', '#ffb653', '#199ebd', '#fdd9b5', '#5d76cd', '#1dacd6', '#80daeb', '#faa76c', '#9d81ba', '#ff9baa', '#a8e4a0',
    '#ef98aa', '#cd4a4a', '#9aceeb', '#f664af', '#c0448f', '#fc89ac', '#e7c697', '#77dde7', '#8e4584', '#cb4154', '#cdc5c2',
    '#c8385a', '#fdfc74', '#1974d2', '#ff48d0', '#ca3767', '#45cea2', '#7851a9', '#fc74fd', '#de5d83',
    '#efdbc5', '#cc6666', '#7442c8', '#71bc78', '#e6335f', '#fd7c6e', '#FA9C44', '#FFDB00', '#fed8b1', '#ff7a00'
]
let trace1 = {
    type: "bar",
    y: data.map(row => row.state),
    x: data.map(row => row.total_museums),
    // text: reversedData.map(object => object.state),
    name: "Total Museums by State",
    orientation: "h",
    // mode: 'markers',
    marker: {
        color: colors
    }
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let tracedata = [trace1];

// Apply a title to the layout
let layout = {
    title: "Total Museums by State",
    margin: {
        l: 100,
        r: 50,
        t: 20,
        b: 20
    }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("bar", tracedata, layout);

// Pie Chart Info
// Trace2 for the Types Data
let piecolors = ['#ee204d', '#1f75fe', '#fce883', '#ff7538', '#1cac78', '#926eae', '#c0448f', '#ff5349', '#c5e384',
    '#7366bd', '#ffb653', '#199ebd', '#fdd9b5', '#5d76cd', '#1dacd6', '#80daeb', '#faa76c', '#9d81ba', '#ff9baa', '#a8e4a0',
    '#ef98aa', '#cd4a4a', '#9aceeb', '#f664af', '#c0448f', '#fc89ac', '#e7c697', '#77dde7', '#8e4584', '#cb4154', '#cdc5c2',
    '#c8385a', '#fdfc74', '#1974d2', '#ff48d0', '#ca3767', '#45cea2', '#7851a9', '#fc74fd', '#de5d83',
    '#efdbc5', '#cc6666', '#7442c8', '#71bc78', '#e6335f', '#fd7c6e', '#FA9C44', '#FFDB00', '#fed8b1', '#ff7a00'
]
let trace2 = [{
        values: [],
        labels: ['Museums', 'Aquariums', 'Zoos'],
        type: 'pie',
        name: 'MAZE Types',
        marker: {
          colors: piecolors[0]
        },
      }];
      
      let tracedata1 = [trace2];

      let pielayout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('pie', tracedata1, pielayout);


