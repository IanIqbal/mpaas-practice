Page({
  data: {
    cardNo: '1234****',
    name: '',
    layerShow1: '',
    layerShow2: 'Layout of vertical input boxes',
    layerShow3: 'disabled Stateful input',
  },
  onExtraTap() {
    my.alert({
      content: 'extra tapped',
    });
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onItemFocus() {},
  onItemBlur() {},
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
  },
  onSend() {
    my.alert({
      title: 'verify code sent',
    });
  },
});
