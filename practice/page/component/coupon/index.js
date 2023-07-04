Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ',
  },
  onCouponClick(e) {
    if (e.currentTarget.dataset.used) {
      return false;
    } else {
      my.alert({
        content: 'Available tickets，Ticket click event',
      });
    }
  },
  onButtonTap() {
    my.alert({
      content: 'Capsule button click event',
    });
  },
});
