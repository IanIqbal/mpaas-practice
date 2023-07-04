Page({
  data: {
    show: true,
    items: [
      { id: 1, value: 'clothes', selected: true },
      { id: 1, value: 'cupboard' },
    ],
  },
  handleCallBack(data) {
    my.alert({
      content: data,
    });
  },
  toggleFilter() {
    this.setData({
      show: !this.data.show,
    });
  },
});
