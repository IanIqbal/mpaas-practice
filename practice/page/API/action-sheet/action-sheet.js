Page({
  showActionSheet() {
    my.showActionSheet({
      title: 'Alipay-ActionSheet',
      items: ['Menu I', 'Menu II', 'Menu III'],
      cancelButtonText: 'Cancel',
      success: (res) => {
        const btn = res.index === -1 ? 'cancel' : 'Section' + res.index + 'individual';
        my.alert({
          title: `You ordered${btn}Button`
        });
      },
    });
  },
});
