'strict'


$(document).ready(function(){
    $('.parallax').parallax();
  });

    const userLocation = navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
    
    })

  var userLatitude ;
  var userLongitude ;

 

  // Search button that gathers search field when user clicks search button, it also grabs users geoLocation
$("#searchButton").on("click", function(e) {
 console.log("You clicked the Search Button!");

 //catches information from search field. 
 let searchTitle = $("#searchField").val();
 let codedSearchTitle = encodeURIComponent(searchTitle);
 console.log(codedSearchTitle)

 //attaches User search result to the https address required by googlemaps api
 let userPreLimSearch = "https://maps.googleapis.com/maps/api/geocode/json?address="+ codedSearchTitle +"&key=AIzaSyBSnJtTqZp2Nzg7w1o1rF19y2Eic3IuhCQ"
 let googleGeocoding = 

 event.preventDefault();
 $.ajax({
   url: userPreLimSearch,
   method: "Get",
 })
 .then(function(response){
   //gains access to the geocoded latitude and longitude from googlemaps object
   userLatitude = response.results[0].geometry.location.lat;
   userLongitude = response.results[0].geometry.location.lng;

   // Start of Geolocation fucntion

    let currentLat = userLatitude;
    let currentLng = userLongitude;
    console.log(currentLat);
    console.log(currentLng);
    
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

 })
 
});


