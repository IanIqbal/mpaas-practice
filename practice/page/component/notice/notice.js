Page({
  data: {
    closeShow: true,
    closeActionShow: true,
    marqueeProps: {
      loop: true,
      leading: 1000,
      trailing: 800,
      fps: 40,
    },
    capsuleItem: [],
    capsuleItemList: [
      {
        name: 'https://img.alicdn.com/tfs/TB1yTvnfQY2gK0jSZFgXXc5OFXa-145-145.png',
        value: 'https://img.alicdn.com/tfs/TB1yTvnfQY2gK0jSZFgXXc5OFXa-145-145.png',
      },
      {
        name: 'https://img.alicdn.com/tfs/TB1egTmfNz1gK0jSZSgXXavwpXa-145-145.png',
        value: 'https://img.alicdn.com/tfs/TB1egTmfNz1gK0jSZSgXXavwpXa-145-145.png',
      },
      {
        name: 'https://img.alicdn.com/tfs/TB1l36mfQP2gK0jSZPxXXacQpXa-145-145.png',
        value: 'https://img.alicdn.com/tfs/TB1l36mfQP2gK0jSZPxXXacQpXa-145-145.png',
      },
      {
        name: 'https://img.alicdn.com/tfs/TB1uCUdfND1gK0jSZFyXXciOVXa-151-164.png',
        value: 'https://img.alicdn.com/tfs/TB1uCUdfND1gK0jSZFyXXciOVXa-151-164.png',
      },
    ],
    type: [
      { name: 'normal', value: 'normal', checked: true },
      { name: 'error', value: 'error' },
      { name: 'active', value: 'active' },
      { name: 'transparent', value: 'transparent' },
    ],
    noticeType: 'normal',
    mode: [
      { name: '', value: 'nothing', checked: true },
      { name: 'link', value: 'arrow' },
      { name: 'closable', value: 'close' },
    ],
    noticeMode: '',
    actionText: '',
    actionLeftText: '',
  },
  capsuleItemChange(e) {
    this.setData({
      capsuleItem: e.detail.value,
    });
  },
  getContent(e) {
    this.setData({
      noticeContent: e.detail.value,
    });
  },
  typeChange(e) {
    this.setData({
      noticeType: e.detail.value,
    });
  },
  modeChange(e) {
    this.setData({
      noticeMode: e.detail.value,
    });
    if (e.detail.value !== '') {
      this.setData({
        actionText: '',
      });
    } else {
      this.setData({
        actionText: '',
        actionLeftText: '',
      });
    }
  },
  getRightText(e) {
    this.setData({
      actionText: e.detail.value,
    });
  },
  getLeftText(e) {
    this.setData({
      actionLeftText: e.detail.value,
    });
  },
  linkActionClick() {
    my.showToast({
      content: 'The left operation area has been clicked',
      duration: 1000,
    });
  },
  actionClick() {
    my.showToast({
      content: 'You clicked the operation area on the right',
      duration: 1000,
    });
  },
});
