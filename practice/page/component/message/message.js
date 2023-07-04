Page({
  data: {
    title: 'Operation successful',
    subTitle: 'Content details can be broken into lines，No more than two items are recommended。You can also slot="tips" Insert more functional prompts。',
    type: 'success',
    items: [
      { name: 'success', value: 'success', checked: true },
      { name: 'fail', value: 'fail' },
      { name: 'info', value: 'info' },
      { name: 'warn', value: 'warn' },
      { name: 'waiting', value: 'waiting' },
    ],
  },
  onLoad() {
  },
  goBack() {
    my.navigateBack();
  },
  radioChange(e) {
    this.setData({
      type: e.detail.value,
    });
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value,
    });
  },
  subtitleChange(e) {
    this.setData({
      subTitle: e.detail.value,
    });
  },
  onChange(e) {
    if (e.detail.value) {
      this.setData({
        mainButton: {
          buttonText: 'Main operations',
        },
        subButton: {
          buttonText: 'Auxiliary operation',
        },
      });
    } else {
      this.setData({
        mainButton: null,
        subButton: null,
      });
    }
  },
});
