var vg_1 = "top10_co2_vs_forest_area.vg.json";
vegaEmbed("#barchart-1", vg_1).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);


var vg_2 = "top10_forest_area_vs_co2.vg.json";
vegaEmbed("#barchart-2", vg_2).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "electricity_map.vg.json";
vegaEmbed("#choropleth_map", vg_3).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_4 = "annual_freshwater_continents.vg.json";
vegaEmbed("#donut_chart", vg_4).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_5 = "gdp_vs_population.vg.json";
vegaEmbed("#scatter_plot", vg_5).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);