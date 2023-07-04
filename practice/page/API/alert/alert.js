Page({
  alert() {
    my.alert({
      title: 'dear',
      content: 'Your bill of this month has been issued',
      buttonText: 'I got it!',
      success: () => {
        my.alert({
          title: 'User clicked「I got it!」',
        });
      }
    });
  },
})
