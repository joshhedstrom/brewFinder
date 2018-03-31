'strict'


$(document).ready(function(){
    $('.parallax').parallax();
  });
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