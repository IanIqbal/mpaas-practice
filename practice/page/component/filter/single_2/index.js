Page({
  data: {
    show: true,
    items: [
      { id: 1, value: 'clothes', subtitle: 'subtitle', selected: true },
      { id: 1, value: 'cupboard', subtitle: 'subtitle' },
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
