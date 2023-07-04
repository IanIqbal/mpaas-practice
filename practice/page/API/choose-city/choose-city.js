Page({
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({
          title: 'chooseCity response: ' + JSON.stringify(res),
        });
      },
    });
  },
  setLocatedCity() {
    my.onLocatedComplete({
      success: (res) => {
        my.setLocatedCity({
          locatedCityId:res.locatedCityId,//res.locatedCityId
          locatedCityName:'Modified city name', 
          success: (res) => {
            my.alert({ content: 'Successfully modified the current location city' + JSON.stringify(res), });
          },
          fail: (error) => {
            my.alert({ content: 'Failed to modify the current location city' + JSON.stringify(error), });
          },
        });
      },
      fail: (error) => {
        my.alert({ content: 'onLocatedCompletefail' + JSON.stringify(error), });
      }
    });
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      setLocatedCity: true,
      success: (res) => {
        my.alert({
          title: 'chooseCity response: ' + JSON.stringify(res),
        });
      },
    });
  },
});
