function fetchStoreInformation() {
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var storeType = document.getElementById("storeType").value;
  
    // Replace this with your actual API call or other logic
    var apiResponse = `Fetching information for ${storeType} in ${city}, ${state}...`;
  
    // Display the result
    document.getElementById("result").innerHTML = apiResponse;
  }
  