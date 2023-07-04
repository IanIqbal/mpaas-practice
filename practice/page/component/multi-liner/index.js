Page({
  data: {
    value: 'content',
    controlled: true,
  },
  onInput(e) {
    this.setData({
      value: e.detail.value,
    });
  },
});
