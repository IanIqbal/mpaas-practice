Page({
  watchShake() {
    my.watchShake({
      success: function() {
        console.log('It is moving')
        my.alert({ title:'It is moving o.o'});
      }
    });
  },
});
