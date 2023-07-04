Page({
  data: {
    items: [
      { value: 'a', title: 'check box-Default unchecked', id: 'checkbox1' },
      { checked: true, value: 'b', title: 'check box-Selected by default', id: 'checkbox2' },
      { checked: true, disabled: true, value: 'c', title: 'check box-Selected by defaultdisabled', id: 'checkbox3' },
    ],
    items1: [
      { ctrlChecked: false, disabled: false, value: 'd', title: 'check box-Default unchecked', id: 'checkbox4' },
      { ctrlChecked: true, disabled: true, value: 'e', title: 'check box-Default uncheckeddisabled', id: 'checkbox5' },
      { ctrlChecked: true, value: 'f', title: 'check box-Selected by default', id: 'checkbox6' },
    ],
  },
  onChange(e) {
    const { id } = e.currentTarget.dataset;
    const { value } = e.detail;
    const { items1 } = this.data;
    const { length } = items1;
    for (let index = 0; index < length; index += 1) {
      if (items1[index].id === id) {
        this.setData({
          [`items1[${index}].ctrlChecked`]: value,
        });
        break;
      }
    }
  },
  // 全选
  checkedON() {
    this.checkedAll(true);
  },
  // 全不选
  checkedOFF() {
    this.checkedAll(false);
  },
  checkedAll(status) {
    const items1 = this.data.items1.map((element) => ({
      ...element,
      ctrlChecked: status,
    }));
    this.setData({
      items1,
    });
  },
});
