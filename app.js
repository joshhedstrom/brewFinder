'strict'


$(document).ready(function(){
    $('.parallax').parallax();
  });

    const userLocation = navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
    
    })

    //googole api key and access link
    // <script src="https://maps.googleapis.com/maps/api/js?sensor=true&key=AIzaSyBSnJtTqZp2Nzg7w1o1rF19y2Eic3IuhCQ&libraries=places"></script> 

  // Start of Geolocation fucntion
  navigator.geolocation.getCurrentPosition(function(position) {

    let currentLat = position.coords.latitude
    let currentLng = position.coords.longitude

    // console.log(currentLat, currentLng)

    
    const apiKey = "IB4MtYCaYXdQIdqm4K7847xEzhASkSEll2GFdl2tKVcElY8dSP3w-LCa03qSscEkwKVncUnsR5AizTA7EdD7FHmM1Qsr781Rsc3EqeKCIDw7jd8PFMRNaK1OwXS6WnYx"
    let fetchUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=breweries&latitude=${currentLat}&longitude=${currentLng}`

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + apiKey);

    fetch(fetchUrl, {
      headers: myHeaders 
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
    });

  });

  // Search button that gathers search field when user clicks search button, it also grabs users geoLocation
$("#searchButton").on("click", function(e) {
 console.log("You clicked the Search Button!");
 let userSearchTitle = $("#searchField").val();
 let userPreLimSearch = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userSearchTitle + "&key=AIzaSyBSnJtTqZp2Nzg7w1o1rF19y2Eic3IuhCQ?"
 let googleGeocoding = 

 event.preventDefault();
});