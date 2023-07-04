Page({
  data: {
    footer: [{
      text: 'return',
    }],
  },
  onTapLeft() {
    my.reLaunch({
      url: '/pages/page-result/index',
    });
  },
});
