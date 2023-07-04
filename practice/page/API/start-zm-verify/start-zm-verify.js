Page({
  startZMVerify() {
    if (!my.canIUse('startZMVerify')) {
      my.alert({
        title: 'Client version too low',
        content: 'Please upgrade Alipay version'
      });
      return;
    }

    my.startZMVerify({
      bizNo: 'demo',
      success: (res) => {
        my.alert({ title: 'success:' + JSON.stringify(res)});
      },
      fail: (res) => {
        my.alert({ title: 'fail: ' + JSON.stringify(res)});
      },
    });
  }
})

