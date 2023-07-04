Page({
  data: {
    show: true,
    items: [
      { id: 1, value: 'clothes', selected: true },
      { id: 1, value: 'cupboard' },
      { id: 1, value: 'coat hanger' },
      { id: 3, value: 'Electronics' },
      { id: 4, value: 'anti-theft door' },
      { id: 5, value: 'chair' },
      { id: 7, value: 'monitor' },
      { id: 6, value: 'A new electronic product' },
      { id: 8, value: 'XX XX XX TV game base' },
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
