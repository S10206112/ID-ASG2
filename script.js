$(document).ready(function () {
    var settings = {
      "url": "https://api.data.gov.sg/v1/environment/psi?date=2020-12-01",
      "method": "GET",
    };
  
    $.ajax(settings).done(function (response) {
     // console.log(response);
     // console.log("Latitude: " + response.items[0].readings.o3_sub_index.west);
    });
  
  });//eof documentready
