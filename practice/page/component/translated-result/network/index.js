Page({
  data: {
    footer: [{
      text: 'repair',
    }, {
      text: 'Refresh',
    }],
  },

  onTapLeft(e) {
    console.log(e, 'onTapLeft');
  },
  onTapRight(e) {
    console.log(e, 'onTapRight');
  },
});
