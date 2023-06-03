// Check if geolocation is supported by the browser
if (navigator.geolocation) {
    // Request the current position
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  let hospitals = [
    {
      name: "CMC",
      latitude: 12.9244,
      longitude: 79.1353
    },
    {
      name: "Ashwin Hospital",
      latitude: 11.0241,
      longitude: 76.9732
    },
    {
      name: "Deepan Hospital",
      latitude: 10.8157,
      longitude: 78.6801
    },
    {
      name: "Ortho One",
      latitude: 10.9963,
      longitude: 77.0083
    }
  ];
  
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
    let nearestHospital = findNearestHospital();
    console.log("The nearest hospital is:", nearestHospital.name);
  
    // Send the coordinates to the nearest hospital
    sendCoordinatesToHospital(latitude, longitude, nearestHospital);
  }
  
  function findNearestHospital() {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let nearestHospital;
  
    for (var i = 0; i < hospitals.length; i++) {
      let distance = calculateDistance(hospitals[i].latitude, hospitals[i].longitude);
      if (distance < minDistance) {
        minDistance = distance;
        nearestHospital = hospitals[i];
      }
    }
  
    return nearestHospital;
  }
  
  function calculateDistance(hospitalLatitude, hospitalLongitude) 
  {
    let latDistance = Math.pow((hospitalLatitude - latitude), 2);
    let longDistance = Math.pow((hospitalLongitude - longitude), 2);
    let distance = Math.sqrt(latDistance + longDistance);
    return distance;
  }
  
  function sendCoordinatesToHospital(latitude, longitude, hospital) 
  {
    // Prepare the data to send
    const data = 
    {
      latitude: latitude,
      longitude: longitude,
      hospital: hospital.name
    };
  
    // Make a POST request to the server
    fetch("send-coordinates", 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => 
        {
        console.log("Coordinates sent successfully:", result);
      })
      .catch(error => 
      {
        console.error("Error sending coordinates:", error);
      });
  }
  

  //send-coordinates