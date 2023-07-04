const cfg = {
  c1: {
    related: false,
    agreeBtn: {
      title: 'Agree to the agreement and activate',
    },
    cancelBtn: {
      title: 'Not open as for Now, only manual payment',
    },
    hasDesc: false,
  },
  c2: {
    related: false,
    agreeBtn: {
      title: 'Agree to the agreement and activate',
    },
    hasDesc: true,
  },
  c3: {
    related: true,
    agreeBtn: {
      checked: true,
      title: 'submit',
    },
  },
  c4: {
    related: true,
    agreeBtn: {
      title: 'submit',
    },
  },
  c5: {
    related: false,
    agreeBtn: {
      title: 'Agree to the agreement and submit',
    },
  },
  c6: {
    related: true,
    fixed: true,
    agreeBtn: {
      checked: true,
      title: 'submit',
    },
  },
};


Page({
  data: cfg,
  onLoad() {
  },
  onSelect(e) {
    const selectedData = e.currentTarget.dataset.name || '';
    selectedData && my.alert({
      title: 'Terms Btns',
      content: selectedData,
    });
  },

});
