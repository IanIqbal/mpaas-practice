Page({
  data: {},
  onLoad() {},
  titleGo() {
    my.showToast({
      content: 'Click the arrow，Can set jump',
    });
  },
  titleMore() {
    my.showToast({
      content: 'Click More，Expand bubble menu',
    });
  },
  titleClose() {
    my.showToast({
      content: 'Click Close，Settable off',
    });
  },
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    console.log(e.detail.value);
    this.setData({
      [name]: e.detail.value,
    });
  },
});
