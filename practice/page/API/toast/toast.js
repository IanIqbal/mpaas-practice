Page({
  showToastSuccess() {
    my.showToast({
      type: 'success',
      content: 'Operation successful',
      duration: 3000,
      success: () => {
        my.alert({
          title: 'toast Disappeared',
        });
      },
    });
  },
  showToastFail() {
    my.showToast({
      type: 'fail',
      content: 'operation failed',
      duration: 3000,
      success: () => {
        my.alert({
          title: 'toast Disappeared',
        });
      },
    });
  },
  showToastException() {
    my.showToast({
      type: 'exception',
      content: 'Network exception',
      duration: 3000,
      success: () => {
        my.alert({
          title: 'toast Disappeared',
        });
      },
    });
  },
  showToastNone() {
    my.showToast({
      type: 'none',
      content: 'remind',
      duration: 3000,
      success: () => {
        my.alert({
          title: 'toast Disappeared',
        });
      },
    });
  },
  hideToast() {
    my.hideToast()
  },
})
