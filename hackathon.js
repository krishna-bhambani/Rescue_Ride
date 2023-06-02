// Check if geolocation is supported by the browser
if (navigator.geolocation) {
    // Request the current position
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  let cmc = {
      latitude:12.9244,
      longitude: 79.1353
  };
  let ashwin_hospital = {
      latitude:11.0241,
      longitude: 76.9732
  };
  let deepan_hospital = {
      latitude:10.8157,
      longitude:78.6801
  };
  let ortho_one = {
      latitude:10.9963,
      longitude:77.0083
  };
  var latitude; // Declare the latitude variable
  var longitude; // Declare the longitude variable
  
  
  function showPosition(position) {
    // Retrieve latitude and longitude
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  
    // Print the results
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
  
    // Call the function that requires latitude and longitude
    let curr_distance;
  let min_distance = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < 4; i++) 
  {
      curr_distance = cal_distance(i);
      min_distance = Math.min(curr_distance,min_distance);
  }
  console.log("the nearest hospital is",min_distance);
  }
  
  
  var lat;
  var longi;
   // Declare the variable outside the callback function
  
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude =position.coords.longitude; 
    lat = latitude;
    longi = longitude;
    console.log("Latitude: " + latitude);
  });
  
  
   function cal_distance(index)
  {
      let lat = latitude; // Access latitude outside the callback function
      let longi = longitude; // Access longitude outside the callback function
      switch(index){
          case 0:
              let lat_distance_0 = Math.pow((cmc.latitude - lat),2);
              let longi_distance_0 = Math.pow((cmc.longitude -longi),2);
              let sq1_0 = Math.pow(lat_distance_0,2);
              let sq2_0 = Math.pow(longi_distance_0,2);
              let ans_0 = Math.pow(sq1_0 + sq2_0,1/2);
              return ans_0;
  
  
          case 1:
              let lat_distance_1 = Math.pow((ashwin_hospital.latitude - lat),2);
              let longi_distance_1 = Math.pow((ashwin_hospital.longitude -longi),2);
              let sq1_1 = Math.pow(lat_distance_1,2);
              let sq2_1 = Math.pow(longi_distance_1,2);
              let ans_1 = Math.pow(sq1_1 + sq2_1,1/2);
              return ans_1;
  
          case 2:
              let lat_distance_2 = Math.pow((deepan_hospital.latitude - lat),2);
              let longi_distance_2 = Math.pow((deepan_hospital.longitude -longi),2);
              let sq1_2 = Math.pow(lat_distance_2,2);
              let sq2_2 = Math.pow(longi_distance_2,2);
              let ans_2 = Math.pow(sq1_2 + sq2_2,1/2);
              return ans_2;
  
          case 3:
              let lat_distance_3 = Math.pow((ortho_one.latitude - lat),2);
              let longi_distance_3 = Math.pow((ortho_one.longitude -longi),2);
              let sq1_3 = Math.pow(lat_distance_3,2);
              let sq2_3 = Math.pow(longi_distance_3,2);
              let ans_3 = Math.pow(sq1_3 + sq2_3,1/2);
              return ans_3;
  
      }
  }