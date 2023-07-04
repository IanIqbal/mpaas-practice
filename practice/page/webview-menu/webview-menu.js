Page({
  data: {
    url:""
  },
  onLoad(query) {
    this.setData({url:query.page})
  },
});
