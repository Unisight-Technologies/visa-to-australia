/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add some data
polygonSeries.data = [{
  "id": "ES",
  "name": "Spain",
  "value": 100,
  "fill": am4core.color("#F05C5C")

}, {
  "id": "IT",
  "name": "Italy",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "MT",
  "name": "Malta",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "GR",
  "name": "Greece",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "CY",
  "name": "Cyprus",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "IE",
  "name": "Ireland",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "CA",
  "name": "Canada",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "DE",
  "name": "Germany",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "NZ",
  "name": "New Zealand",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "DK",
  "name": "Denmark",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "US",
  "name": "United States",
  "value": 50,
  "fill": am4core.color("#F05C5C")
},{
  "id": "AU",
  "name": "Australia",
  "value": 50,
  "fill": am4core.color("#F05C5C")
}];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";
