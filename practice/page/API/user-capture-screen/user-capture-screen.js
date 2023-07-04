Page({
  data: {
    condition: false,
  },
  onReady() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: 'Received user screenshot',
      });
    });
  },
  offUserCaptureScreen() {
    my.offUserCaptureScreen();
    this.setData({
      condition: false,
    });
  },
  onUserCaptureScreen() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: 'Received user screenshot'
      });
    });
    this.setData({
      condition: true,
    });
  },
});
