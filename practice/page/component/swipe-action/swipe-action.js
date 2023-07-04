Page({
  data: {
    swipeIndex: null,
    list: [
      { right: [{ type: 'delete', text: 'delete', fColor: 'black' }], content: 'Change text color' },
      { right: [{ type: 'edit', text: 'Cancel favorites', fColor: 'rgba(0,0,0,.5)' }, { type: 'delete', text: 'delete', fColor: 'yellow' }, { type: 'other', text: 'Add one' }], content: 'change text color' },
      { right: [{ type: 'edit', text: 'Cancel favorites', bgColor: '#333' }, { type: 'delete', text: 'delete' }], content: 'One of the background color changes' },
      { right: [{ type: 'edit', text: 'Cancel favorites', bgColor: '#ccc', fColor: '#f00' }, { type: 'delete', text: 'delete', bgColor: '#0ff', fColor: '#333' }], content: 'Text and background color change at the same time' },
      { right: [{ type: 'edit', text: 'Cancel favorites cancel favorites cancel' }, { type: 'delete', text: 'Delete delete delete' }], content: 'Default color style' },
      { right: [{ type: 'edit', text: 'Cancel follow' }, { type: 'other', text: 'Do not disturb' }, { type: 'delete', text: 'delete' }], content: 'card with three options' },
      { right: [{ type: 'edit', text: 'Cancel follow' }, { type: 'other', text: 'Do not disturb' }, { type: 'delete', text: 'delete' }], content: 'three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card three-option card' },
    ],
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: 'reminder',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: 'determine',
      cancelButtonText: 'cancel',
      success: (result) => {
        // const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            // list.splice(this.data.swipeIndex, 1);
            my.showToast({
              content: 'confirm => You can delete data',
            });
          }
          e.done();
        } else {
          my.showToast({
            content: 'cancel => Slide delete status remains unchanged',
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index,
    });
  },
});
