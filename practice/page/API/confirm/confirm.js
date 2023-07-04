Page({
  comfirm() {
    my.confirm({
      title: 'reminder',
      content: 'Do you want to query the express delivery number：\n1234567890',
      confirmButtonText: 'Check now',
      cancelButtonText: 'Not required for the time being',
      success: (result) => {
        my.alert({
          title: `${result.confirm}`,
        });
      },
    });
  },
});
