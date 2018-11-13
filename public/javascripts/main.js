window.onload = () => {
  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN,
  });

  const center = {
    lat: undefined,
    lng: undefined,
  };

  function placeRestaurants(restaurants) {
    restaurants.forEach((restaurant) => {
      const center = {
        lat: restaurant.location.coordinates[1],
        lng: restaurant.location.coordinates[0],
      };
      const pin = new google.maps.Marker({
        position: center,
        map,
        title: restaurant.name,
      });
      console.log('####');
      markers.push(pin);
    });
  }

  function getRestaurants() {
    axios.get('/restaurants/api')
      .then((response) => {
        console.log(response.data.restaurants);
        placeRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getRestaurants();
};
