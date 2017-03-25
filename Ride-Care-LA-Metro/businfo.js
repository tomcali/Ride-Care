// LA Metro API route data retrieval with function businfo

function businfo(route) {
  var baseurl = 'http://api.metro.net/agencies/lametro/routes/';
  var queryURL = baseurl + route + '/sequence';
  var stop = [];
  var latitude = [];
  var longitude = [];

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    for (var i = 0; i < response.items.length; i++) {
      stop.push(response.items[i].display_name);
      latitude.push(response.items[i].latitude);
      longitude.push(response.items[i].longitude);
    };
  });
return {'stop': stop, 'latitude': latitude, 'longitude': longitude};
};  // end of function businfo 

// demonstrate usage call the function to get 
// json object for the three arrays... stop, latitude, and longitude
var route = prompt('Enter bus route');
var routeData = businfo(route);

// check results by console.log(routeData);




