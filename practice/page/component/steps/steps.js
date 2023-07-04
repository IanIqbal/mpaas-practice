Page({
  data: {
    activeIndex: 1,
    failIndex: 0,
    size: 0,
    items: [{
      title: 'step1',
    }, {
      title: 'step2',
    }, {
      title: 'step3',
    }],
    items2: [{
      title: 'step1',
      description: 'This is the description document of step1. When the text is enough, it will wrap and set a successful icon',
      activeIcon: 'https://i.alipayobjects.com/common/favicon/favicon.ico',
      size: 20,
    }, {
      title: 'step2 If the title is long enough, it will also wrap',
      description: 'This is step2, setting the icon of two states at the same time',
      icon: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*lVojToO-qZIAAAAAAAAAAABjAQAAAQ/original',
      activeIcon: 'https://i.alipayobjects.com/common/favicon/favicon.ico',
    }, {
      title: 'step3',
      description: 'this is step3',
    }, {
      title: 'step4',
      description: 'no more than six characters',
    }],
  },
  nextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1,
    });
  },
  preStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1,
    });
  },
  setFailIndex() {
    this.setData({
      failIndex: 3,
    });
  },
  cancelFailIndex() {
    this.setData({
      failIndex: 0,
    });
  },
  setIconSizeAdd() {
    this.setData({
      size: this.data.size < 30 && this.data.size > 14 ? this.data.size + 1 : 15,
    });
  },
  setIconSizeReduce() {
    this.setData({
      size: this.data.size > 15 ? this.data.size - 1 : 15,
    });
  },
});
