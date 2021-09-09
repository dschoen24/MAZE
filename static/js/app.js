
if (d3.select("#SelState").property("value") == "")
{

d3.json("/API").then(data =>{
// console.log("here here:" , data)
data.sort((a, b) => b.total_museums - a.total_museums);

// Trace for the Data
let trace1 = {
  x: data.map(row => row.sabbr),
  y: data.map(row => row.total_museums),
  width:0.9,
  name: 'Museums',
  type: 'bar',
  marker :
  {color:'#6494AA',
  opacity: 0.8}
};

let trace2 = {
  x: data.map(row => row.sabbr),
  y: data.map(row => row.total_zoo_count),
  width:0.9,
  name: 'Zoos',
  type: 'bar',
  marker :
  {color:'#133C55'}
};

let trace3 = {
  x: data.map(row => row.sabbr),
  y: data.map(row => row.total_aqua_count),
  width:0.9,
  name: 'Aquariums',
  type: 'bar',
  marker :
  {color:'#FF9000'}
};

let trace4 = {
  x: data.map(row => row.sabbr),
  y: data.map(row => row.total_nc_count),
  width:0.9,
  name: 'Nature Centers',
  type: 'bar',
  marker :
  {color: '#8C001A'}
};

let tracedata = [trace1,trace2,trace3,trace4];

let layout = {
  barmode: 'stack',
  title: "US Museums, Aquariums, Zoos and Nature Centers",
  plot_bgcolor:"#fff8ed",
  paper_bgcolor:"#fff8ed"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", tracedata, layout);

})


////////////////////////////////////////map//////////////////////////////////////////////////////
var jasondata = data
  if (jasondata == "Null")
  {
    // console.log("fetching from DB")
    d3.json("/APIM").then(response =>{
      plot_map(response)
    })
  }
  else
  {


////////

// d3.selectAll("[name=mtype]").on("change", function() {
//   var selected = this.value;  
// console.log("data", selected)  
// })
// sel_mus_type_id = ""
// d3.select("#mtype1").on("change",update);
// function update()
// {

// if (d3.select("#mtype1").property("checked") == true)
// {
//   console.log(d3.select("#mtype1").property("checked"))
//   sel_mus_type_id = 1
// }
// }

// console.log('mus', sel_mus_type_id)

////////


sel_mus_type_id = ""  

    function sltype(mtid) {
      // return player.madeTeam == true;
      // A more concise way to express a boolean conditional
      return mtid.museum_type_id == 10  //scity && cit.county_fips == scounty;
    }

    
    if (sel_mus_type_id != "")
    {
    // Call the custom function with filter()
      var getdata = jasondata.filter(sltype);
    }
    else
    {
      var getdata = jasondata
    }

    // the first time call was made to database file has been created with variable data
    // console.log("fetching from Local File")
    plot_map(getdata)
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////

 

/////////////////////////////////////////Most Popular museums Pie Chart ////////////////////////
  // Basic Pie Chart Code
// var data = [{
//     values: [19, 26, 55],
//     labels: ['Residential', 'Non-Residential', 'Utility'],
//     type: 'pie',
//     name: 'Starry Night',
//     marker: {
//       colors: ultimateColors[0]
//     },
//   }];
  
//   var layout = {
//     height: 400,
//     width: 500
//   };
  
//   Plotly.newPlot('myDiv', data, layout);

//////////////////////////////pie ends////////////////////////////////////////////////


////////////////////////////////revenue////////////////////////////////////////////////


d3.json("/APIREV/0/0/0").then(revenue_data =>{
  console.log(revenue_data)

  revenue_data.sort((a, b) => a.revenue - b.revenue);

  x = revenue_data.map(row => row.revenue),
  y = revenue_data.map(row => row.legal_name),
     
  plot_revenue(x,y)

})

////////////////////////////////revenue ends///////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////
d3.json("/APIHM").then(response =>{
  map2(response)
  })
  
 /////////////////////////////////////////////////////////////////////////////////////////////////

}

else if (d3.select("#SelState").property("value") != "" && d3.select("#SelCounty").property("value") == "")
{

  sstate = d3.select("#SelState").property("value")
  state_name_comp = d3.select("#SelState option:checked").text()
  state_name_comp = state_name_comp.split("-")[0];
  console.log('name', state_name_comp)
  d3.json("/API/"+sstate).then(data =>{
    // console.log("here here:" , data)
    
    
    // Trace for the Data
    let tracestate1 = {
      x: data.map(row => row.county_x),
      y: data.map(row => row.total_museums),
      width:0.9,
      name: 'Museums',
      type: 'bar',
      marker :
    {color:'#6494AA',
    opacity: 0.8}
    };
    
    let tracestate2 = {
      x: data.map(row => row.county_x),
      y: data.map(row => row.total_zoo_count),
      width:0.9,
      name: 'Zoos',
      type: 'bar',
      marker :
      {color:'#133C55'}
    };
    
    let tracestate3 = {
      x: data.map(row => row.county_x),
      y: data.map(row => row.total_aqua_count),
      width:0.9,
      name: 'Aquariums',
      type: 'bar',
      marker :
      {color:'#FF9000'}
    };
    
    let tracestate4 = {
      x: data.map(row => row.county_x),
      y: data.map(row => row.total_nc_count),
      width:0.9,
      name: 'Nature Centers',
      type: 'bar',
      marker :
      {color: '#8C001A'} 
    };
    
    let tracedatastate = [tracestate1,tracestate2,tracestate3,tracestate4];
    
    let layoutstate = {
      barmode: 'stack',
      title: " State of " + state_name_comp + " - Museums, Aquariums, Zoos and Nature Centers",
      xaxis : {
        automargin: true
      }
    };
    
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", tracedatastate, layoutstate);
    
    })


    ////////////////////////////////////////map//////////////////////////////////////////////////////
   

      var jsondata = data
      if (jsondata == "Null")
      {
        // console.log("fetching from DB")
        d3.json("/APIM").then(response =>{
          plot_map(response)
        })
      }
      else
      {

        // Create a custom function to return players who made the team
      function slstate(st) {
        // return player.madeTeam == true;
        // A more concise way to express a boolean conditional
        return st.state_fips == sstate;
      }
  
      // Call the custom function with filter()
      let getstatedata = jsondata.filter(slstate);
      
        // the first time call was made to database file has been created with variable data
        // console.log("fetching from Local File")
        plot_map(getstatedata)
      }
    
      ///////////////////////////////////////////////////////////////////////////////////////////////// 

    //////////////////////////////revenue /////////////////////////////////////////////////
    

      d3.json("/APIREV/"+sstate+"/0/0").then(revenue_data =>{
        console.log(revenue_data)
      
        revenue_data.sort((a, b) => a.revenue - b.revenue);
      
        x = revenue_data.map(row => row.revenue),
        y = revenue_data.map(row => row.legal_name),
           
        plot_revenue(x,y)
      
      })
       ///////////////////////////////////////////revenue/////////////////////////  


       
/////////////////////////////////////////////////////////////////////////////////////////////////
d3.json("/APIHM").then(response =>{
  map2(response)
  })
  
 /////////////////////////////////////////////////////////////////////////////////////////////////


    }


else if (d3.select("#SelState").property("value") != "" && d3.select("#SelCounty").property("value") != "" && d3.select("#SelCity").property("value") == "")
{
  sstate = d3.select("#SelState").property("value")
  scounty = d3.select("#SelCounty").property("value")

  state_name_comp = d3.select("#SelState option:checked").text()
  state_name_comp = state_name_comp.split("-")[0];
  county_name_comp = d3.select("#SelCounty option:checked").text()
  

  console.log(scounty)
  d3.json("/API/"+sstate+"/"+scounty).then(data =>{
    // console.log("here city:" , data)
    
    
    // Trace for the Data
    let tracecounty1 = {
      x: data.map(row => row.city_phyloc),
      y: data.map(row => row.total_museums),
      name: 'Museums',
      type: 'bar',
      marker :
        {color:'#6494AA',
        opacity: 0.8}
    };
    
    let tracecounty2 = {
      x: data.map(row => row.city_phyloc),
      y: data.map(row => row.total_zoo_count),
      name: 'Zoos',
      type: 'bar',
      marker :
      {color:'#133C55'}
    };
    
    let tracecounty3 = {
      x: data.map(row => row.city_phyloc),
      y: data.map(row => row.total_aqua_count),
      name: 'Aquariums',
      type: 'bar',
      marker :
      {color:'#FF9000'}
    };
    
    let tracecounty4 = {
      x: data.map(row => row.city_phyloc),
      y: data.map(row => row.total_nc_count),
      name: 'Nature Centers',
      type: 'bar',
      marker :
      {color: '#8C001A'} 
      
    };
    
    let tracedatacounty = [tracecounty1,tracecounty2,tracecounty3,tracecounty4];
    
    let layoutcounty = {
      barmode: 'stack',
      title: state_name_comp + " - " + county_name_comp + " - Museums, Aquariums, Zoos and Nature Centers"
    };
    
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", tracedatacounty, layoutcounty);
    
     })

      ////////////////////////////////////////map//////////////////////////////////////////////////////
        

      var jsondata1 = data
      if (jsondata1 == "Null")
      {
        // console.log("fetching from DB")
        d3.json("/APIM").then(response =>{
          plot_map(response)
        })
      }
      else
      {

        // Create a custom function to return players who made the team
      function slcty(ct) {
        // return player.madeTeam == true;
        // A more concise way to express a boolean conditional
        return ct.county_fips == scounty;
      }

      // Call the custom function with filter()
      let getcountydata = jsondata1.filter(slcty);
      
        // the first time call was made to database file has been created with variable data
        // console.log("fetching from Local File")
        plot_map(getcountydata)
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////// 

      //////////////////////////////revenue /////////////////////////////////////////////////
    

      d3.json("/APIREV/"+sstate+"/"+scounty+"/0").then(revenue_data =>{
        console.log(revenue_data)
      
        revenue_data.sort((a, b) => a.revenue - b.revenue);
      
        x = revenue_data.map(row => row.revenue),
        y = revenue_data.map(row => row.legal_name),
           
        plot_revenue(x,y)
      
      })
       ///////////////////////////////////////////revenue/////////////////////////   
/////////////////////////////////////////////////////////////////////////////////////////////////
d3.json("/APIHM").then(response =>{
  map2(response)
  })
  
 /////////////////////////////////////////////////////////////////////////////////////////////////


}


/////////////////////added for city ///////////////////////////////

else if (d3.select("#SelState").property("value") != "" && d3.select("#SelCounty").property("value") != "" && d3.select("#SelCity").property("value") != "")
{
  sstate = d3.select("#SelState").property("value")
  scounty = d3.select("#SelCounty").property("value")
  scity = d3.select("#SelCity").property("value") 

  state_name_comp = d3.select("#SelState option:checked").text()
  state_name_comp = state_name_comp.split("-")[0];
  county_name_comp = d3.select("#SelCounty option:checked").text()
  city_name_comp  = d3.select("#SelCity option:checked").text()

  // console.log(scity)
  d3.json("/API/"+sstate+"/"+scounty+"/"+scity).then(data =>{
    // console.log("here city attarctions:" , data)
    
    console.log(data)
    
    // Trace for the Data
  

    let tracecity = {
      x: data.map(row => row.museum_type),
      y: data.map(row => row.total_museums),
      name: 'Museums',
      type: 'bar',
      marker:
      {color:'#6494AA',
      opacity: 0.8}
    };
    
    
    
    let tracedatacity = [tracecity];
    
    let layoutcity = {
      title: state_name_comp + " - " + county_name_comp  + " - " + city_name_comp + " - Museums, Aquariums, Zoos and Nature Centers"
    };
    
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", tracedatacity, layoutcity);
    
     })

      ////////////////////////////////////////map//////////////////////////////////////////////////////
        

      var jsondata2 = data
      if (jsondata2 == "Null")
      {
        // console.log("fetching from DB")
        d3.json("/APIM").then(response =>{
          plot_map(response)
        })
      }
      else
      {

        // Create a custom function to return players who made the team
      function slcity(cit) {
        // return player.madeTeam == true;
        // A more concise way to express a boolean conditional
        return cit.city_phyloc == scity && cit.county_fips == scounty;
      }

      // Call the custom function with filter()
      let getcitydata = jsondata2.filter(slcity);
      
        // the first time call was made to database file has been created with variable data
        // console.log("fetching from Local File")
        plot_map(getcitydata)
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////// 
     
 //////////////////////////////revenue /////////////////////////////////////////////////
    

 d3.json("/APIREV/"+sstate+"/"+scounty+"/"+scity).then(revenue_data =>{
  console.log(revenue_data)

  revenue_data.sort((a, b) => a.revenue - b.revenue);

  x = revenue_data.map(row => row.revenue),
  y = revenue_data.map(row => row.legal_name),
     
  plot_revenue(x,y)

})
 ///////////////////////////////////////////revenue/////////////////////////   

/////////////////////////////////////////////////////////////////////////////////////////////////
d3.json("/APIHM").then(response =>{
  map2(response)
  })
  
 /////////////////////////////////////////////////////////////////////////////////////////////////


}




/////////////////////added for city ////////////////////////////////


function plot_map(json_response)
{

// Creating the map object
var myMap = L.map("map", {
  center: [50, -97],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
 //'mapbox/streets-v11', //'mapbox/outdoors-v11', //mapbox://styles/mapbox/outdoors-v11 
// const token = "pk.eyJ1Ijoidm11dHlhbGEiLCJhIjoiY2tzdGFxODRzMHMyNTJyanN0bTBobnNxcCJ9.blErqkkF7bOkr52Bwc8wlQ";
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//       id: 'mapbox/streets-v11',
//       tileSize: 512,
//       zoomOffset: -1,
//       accessToken: token
//   }).addTo(myMap);


// Get the data with d3.


  // console.log("many a path I traveled, many a dinner I burned, I made it to inside of the funtion finally !!!! ", json_response)
  
  // Create a new marker cluster group.
  var markers = L.markerClusterGroup();

  // console.log(json_response.length)
  // Loop through the data.
  for (var i = 0; i < json_response.length; i++) {
    
  //   // Set the data location property to a variable.
    var location = json_response[i].museum_name;
    if (json_response[i].street_add_phyloc) {location =  location + "<br />" + json_response[i].street_add_phyloc};
    if (json_response[i].city_phyloc) {location =  location + "<br />" + json_response[i].city_phyloc};
    if (json_response[i].sabbr) {location =  location + "<br />" + json_response[i].sabbr};
    if (json_response[i].zip_phyloc) {location =  location + " " + json_response[i].zip_phyloc};
    if (json_response[i].phone_number) {location =  location + "<br />" + "Phone : " + json_response[i].phone_number};
    var museum_type_id = json_response[i].museum_type_id;
  //   console.log(location)

  // Check for the location property.

        if (museum_type_id =="1")
        {myicon = "https://img.icons8.com/ios-filled/100/000000/archeology.png"}
        else if (museum_type_id == "2")
        {myicon = "https://img.icons8.com/ios-glyphs/96/000000/plant-under-sun.png"}
        else if (museum_type_id == "3")
        {myicon = "https://img.icons8.com/ios-glyphs/90/000000/planet.png"}
        else if (museum_type_id == "4")
        {myicon = "https://img.icons8.com/metro/100/000000/quill-with-ink.png"}
        else if (museum_type_id == "5")
        {myicon = "https://img.icons8.com/ios-glyphs/90/000000/museum.png"}
        else if (museum_type_id == "6")
        {myicon = "https://img.icons8.com/ios-filled/100/000000/harambe-the-gorilla.png"}
        else if (museum_type_id == "7")
        {myicon = "https://img.icons8.com/ios-glyphs/90/000000/paint-palette--v1.png"}
        else if (museum_type_id == "8")
        {myicon = "https://img.icons8.com/ios-glyphs/100/000000/children.png"}
        else if (museum_type_id == "9")
        {myicon = "https://img.icons8.com/ios-glyphs/120/000000/dinosaur--v2.png"}
        else if (museum_type_id == "10")
        {myicon = "https://img.icons8.com/ios-filled/100/000000/seahorse.png"}
  

  var MusIcon = L.icon({
    iconUrl: myicon,
    iconRetinaUrl: myicon,
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
  })

      if (location) {
      // Add a new marker to the cluster group, and bind a popup.
      markers.addLayer(L.marker([json_response[i].latitude, json_response[i].longitude],{icon:MusIcon})
        .bindPopup(location));
    }

  }

  // // Add our marker cluster layer to the map.
  myMap.addLayer(markers);



}


////////////////////////Dashborad Leaflet 2 ///////////////////////////////
// A function to determine the marker size based on the population
function map2(locations)
{
console.log("map2 heat map", locations)

function markerSize(population) {
  return population * 500;
}


var hisMusemMarker  = []; // "HISTORY MUSEUM"
var stemMarker      = []; //"SCIENCE & TECHNOLOGY MUSEUM OR PLANETARIUM"
var hisPresMarker   = []; //"HISTORIC PRESERVATION"
var GenMusemMarker  = []; //"GENERAL MUSEUM"
var MyFavMarker   = []; //"ART MUSEUM"
var ChMusemMarker = []; //"CHILDREN'S MUSEUM"
var natHisMarker  = []; //"NATURAL HISTORY MUSEUM"


// #915063,#7F6487,#567A98,
// #2D8D8F,
// #449971,
// #7B9E4F,#B79B41



// Loop through locations, and create the city and state markers.
for (var i = 0; i < locations.length; i++) {
  // console.log (locations[i]['HISTORY MUSEUM'])
  // Setting the marker radius for the state by passing population into the markerSize function
  if (markerSize(locations[i]['HISTORY MUSEUM']))
  {
  hisMusemMarker.push(
    L.circle([locations[i]['coordinates'][2],locations[i]['coordinates'][3]], {
      stroke: true,
      fillOpacity: 0.75,
      color: "#133C55",
      fillColor: "#133C55",
      radius: markerSize(locations[i]['HISTORY MUSEUM'])
    })
  );
  }

  // Set the marker radius for the city by passing the population to the markerSize() function.
  if (markerSize(locations[i]['SCIENCE & TECHNOLOGY MUSEUM OR PLANETARIUM']))
  {
  stemMarker.push(
    L.circle([locations[i]['coordinates'][2],locations[i]['coordinates'][3]], {
      stroke: true,
      fillOpacity: 0.75,
      color: "171738",
      fillColor: "#171738",
      radius: markerSize(locations[i]['SCIENCE & TECHNOLOGY MUSEUM OR PLANETARIUM'])
    })
  );
  }

  // Set the marker radius for the city by passing the population to the markerSize() function.
  if (markerSize(locations[i]['HISTORIC PRESERVATION']))
  {
  hisPresMarker.push(
    L.circle([locations[i]['coordinates'][2],locations[i]['coordinates'][3]], {
      stroke: true,
      fillOpacity: 0.75,
      color: "#de6069",  //"#8C001A",
      fillColor: "#de6069",
      radius: markerSize(locations[i]['HISTORIC PRESERVATION'])
    })
  );
  }

  // Set the marker radius for the city by passing the population to the markerSize() function.
  if (markerSize(locations[i]['GENERAL MUSEUM']))
  {
  GenMusemMarker.push(
    L.circle([locations[i]['coordinates'][2],locations[i]['coordinates'][3]], {
      stroke: true,
      fillOpacity: 0.75,
      color: "#FF9000",
      fillColor: "#FF9000",
      radius: markerSize(locations[i]['GENERAL MUSEUM'])
    })
  );
  }
  // Set the marker radius for the city by passing the population to the markerSize() function.
  if (markerSize(locations[i]['ART MUSEUM']))
  {
  MyFavMarker.push(
    L.circle([locations[i]['coordinates'][2],locations[i]['coordinates'][3]], {
      stroke: true,
      fillOpacity: 0.75,
      color: "#593C8F",
      fillColor: "#593C8F",
      radius: markerSize(locations[i]['ART MUSEUM'])
    })
  );
  }

  // Set the marker radius for the city by passing the population to the markerSize() function.
  if (markerSize(locations[i]["CHILDREN'S MUSEUM"]))
  {
  ChMusemMarker.push(
    L.circle([locations[i]['coordinates'][2],locations[i]['coordinates'][3]], {
      stroke: true,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "#59A5C8",
      radius: markerSize(locations[i]["CHILDREN'S MUSEUM"])
    })
  );
  }

  // Set the marker radius for the city by passing the population to the markerSize() function.
  if (markerSize(locations[i]['NATURAL HISTORY MUSEUM']))
  {
  natHisMarker.push(
    L.circle([locations[i]['coordinates'][2],locations[i]['coordinates'][3]], {
      stroke: true,
      fillOpacity: 0.75,
      color: "#2FBF71",
      fillColor: "#2FBF71",
      radius: markerSize(locations[i]['NATURAL HISTORY MUSEUM'])
    })
  );
  }

}

// Create the base layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create two separate layer groups: one for the city markers and another for the state markers.
var mus1 = L.layerGroup(hisMusemMarker);
var mus2 = L.layerGroup(stemMarker);
var mus3 = L.layerGroup(hisPresMarker);
var mus4 = L.layerGroup(GenMusemMarker);
var mus5 = L.layerGroup(MyFavMarker);
var mus6 = L.layerGroup(ChMusemMarker);
var mus7 = L.layerGroup(natHisMarker);



// var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object.
var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};

// Create an overlay object.
var overlayMaps = {
  "HISTORY": mus1,
  "SCIENCE": mus2,
  "HIS PRESERVATION": mus3,
  "GENERAL": mus4,
  "ART": mus5,
  "CHILDREN'S": mus6,
  "NATURAL HISTORY": mus7
  // "City Population": cities
};


// Define a map object.
var myMap2 = L.map("map2", {
  center: [50, -97],
  zoom: 3,
  layers: [topo]
  // layers: [street, mus3, mus4,mus5,mus1,mus2,mus6,mus7]
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false,
  position: 'bottomright'

  
}).addTo(myMap2);


}

function plot_revenue(rev,name)
{

  var colors = ['#133C55', '#FCBFB7','#6494AA','#8C001A',
  '#FF9000','#593C8F', '#FF6B6B', '#65532F', '#DB4C40','#D295BF']

    // colors = colors.reverse()
    var top_revenue_trace =
      {

        x: rev,
        y: name,
        type: "bar",
        orientation: "h",
        textposition: 'auto',
        width:0.8,
        marker:{
          color: colors,
          opacity: 0.8}
        
      }

    var bar_layout = {
      title: "<b>Top 10 Revenue Making</b>",
      plot_bgcolor:"#fff8ed",
      paper_bgcolor:"#fff8ed",
      font:{
        size : 10
      },
      showlegend: false,
      xaxis: {
        zeroline: false,
        tickangle: -45
      },
      yaxis: {
        zeroline: false
        },
        margin: {
          l: 350
        }
      ,
      bargap : 0
    }  
    // Data array
    top_10_Data = [top_revenue_trace]

    // console.log(top_10_Data)

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot('plot_revenue',top_10_Data, bar_layout)

}