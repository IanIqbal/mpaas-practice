Page({
  reportAnalytics() {
    my.reportAnalytics('demo_click', {});
    my.alert({
      content: 'Data reporting succeeded，Go to applet management background-View in data analysis',
    });
  },
});
