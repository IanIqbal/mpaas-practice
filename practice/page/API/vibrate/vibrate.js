Page({
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({ title: 'It vibrates'});
      }
    });
  },
  vibrateLong() {
    if (my.canIUse('vibrateLong')) {
      my.vibrateLong((res) => { });
    } else {
      my.alert({
        title: 'Client version too low',
        content: 'my.vibrateLong() need 10.1.35 And above'
      });
    }
  },
  vibrateShort() {
    if (my.canIUse('vibrateShort')) {
      my.vibrateShort((res) => { });
    } else {
      my.alert({
        title: 'Client version too low',
        content: 'my.vibrateShort() need 10.1.35 And above'
      });
    }
  }
});
