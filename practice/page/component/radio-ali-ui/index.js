Page({
  data: {
    items: [
      { checked: true, disabled: false, value: 'a', desc: 'Radio button - checked by default', id: 'checkbox1' },
      { checked: false, disabled: false, value: 'b', desc: 'Radio button - unchecked by default', id: 'checkbox2' },
    ],
    items1: [
      { checked: true, disabled: true, value: 'c', desc: 'Radio button - checked by defaultdisabled', id: 'checkbox3' },
    ],
  },
  onSubmit(e) {
    my.alert({
      content: e.detail.value.lib,
    });
  },
  onReset() {
  },
  radioChange() {
  },
});
