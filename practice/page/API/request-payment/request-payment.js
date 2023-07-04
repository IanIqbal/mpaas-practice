Page({
  data: {},
  tradePay() {
    my.tradePay({
      orderStr: 'xxx', //String spliced by complete payment parameters，Get from the server，Please refer to the applet development document for specific methods
      success: (res) => {
        my.alert({
          title: res.resultCode,
        });
      },
      fail: (res) => {
        my.alert({
          content: JSON.stringify(res),
        });
      },
    });
  }
})
