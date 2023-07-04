Page({
  data: {
    array: ['China', 'U.S.A', 'Brazil', 'Japan'],
    objectArray: [
      {
        id: 0,
        name: 'U.S.A',
      },
      {
        id: 1,
        name: 'China',
      },
      {
        id: 2,
        name: 'Brazil',
      },
      {
        id: 3,
        name: 'Japan',
      },
    ],
    arrIndex: 0,
    index: 0
  },
  bindPickerChange(e) {
    console.log('pickerSend selection change，Carry value is', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log('pickerSend selection change，Carry value is', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
});

