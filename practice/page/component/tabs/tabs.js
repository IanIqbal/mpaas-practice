Page({
  data: {
    tabs: [
      {
        title: 'option',
        subTitle: 'Descriptive copy',
        number: '6',
        showBadge: true,
        badge: {
          arrow: true,
          stroke: true,
        },
      },
      {
        title: 'Option 2',
        subTitle: 'Description copy description',
        number: '66',
        showBadge: true,
        badge: {
          arrow: false,
          stroke: true,
        },
      },
      {
        title: '3 Tab',
        subTitle: 'describe',
        number: '99+',
        showBadge: true,
        badge: {
          arrow: true,
        },
      },
      { title: '4 Tab',
        subTitle: 'describe',
        showBadge: true,
        number: 0,
      },
      { title: '5 Tab',
        subTitle: 'Description Description',
        number: '99+',
        showBadge: false,
      },
      { title: '3 Tab',
        subTitle: 'describe',
        showBadge: false,
      },
      { title: '4 Tab',
        subTitle: 'describe',
      },
      { title: '15 Tab',
        subTitle: 'describe',
      },
    ],
    activeTab: 0,
    type: [
      { name: 'normal', value: 'ordinary', checked: true },
      { name: 'capsule', value: 'capsule' },
      { name: 'hasSubTitle', value: 'Band description' },
    ],
    typeCapsule: false,
    typeHasSubTitle: false,
    plus: [
      { name: 'has', value: 'yes', checked: true },
      { name: 'hasnt', value: 'no' },
    ],
    hasPlus: true,
    contentHeight: [
      { name: 'has', value: 'yes' },
      { name: 'hasnt', value: 'no', checked: true },
    ],
    // hasContentHeight: false,
    tabsNumber: [
      { name: '1', value: 'One' },
      { name: '2', value: 'Two' },
      { name: '3', value: 'Three articles' },
      { name: '-1', value: 'quite a lot', checked: true },
    ],
  },
  tabsNumberChange(e) {
    if (e.detail.value === '1') {
      this.setData({
        tabs: [
          {
            title: 'option',
            subTitle: 'Descriptive copy',
            number: '6',
          },
        ],
      });
    } else if (e.detail.value === '2') {
      this.setData({
        tabs: [
          {
            title: 'option',
            subTitle: 'Descriptive copy',
            number: '6',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: true,
            },
          },
          {
            title: 'Option 2',
            subTitle: 'Description copy description',
            number: '66',
            showBadge: true,
          },
        ],
      });
    } else if (e.detail.value === '3') {
      this.setData({
        tabs: [
          {
            title: 'option',
            subTitle: 'Descriptive copy',
            number: '6',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: true,
            },
          },
          {
            title: 'Option 2',
            subTitle: 'Description copy description',
            number: '66',
            showBadge: true,
          },
          {
            title: 'Tab',
            subTitle: 'describe',
            number: '99+',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: false,
            },
          },
        ],
      });
    } else {
      this.setData({
        tabs: [
          {
            title: 'option',
            subTitle: 'Descriptive copy',
            number: '6',
            showBadge: true,
            badge: {
              arrow: true,
              stroke: true,
            },
          },
          {
            title: 'Option 2',
            subTitle: 'Description copy description',
            number: '66',
            showBadge: true,
            badge: {
              arrow: false,
              stroke: true,
            },
          },
          {
            title: '3 Tab',
            subTitle: 'describe',
            number: '99+',
            showBadge: true,
            badge: {
              arrow: true,
            },
          },
          { title: '4 Tab',
            subTitle: 'describe',
            showBadge: true,
            number: 0,
          },
          { title: '5 Tab',
            subTitle: 'Description Description',
            number: '99+',
            showBadge: false,
          },
          { title: '3 Tab',
            subTitle: 'describe',
            showBadge: false,
          },
          { title: '4 Tab',
            subTitle: 'describe',
          },
          { title: '15 Tab',
            subTitle: 'describe',
          },
        ],
      });
    }
  },
  typeChange(e) {
    if (e.detail.value === 'hasSubTitle') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: true,
      });
    } else if (e.detail.value === 'capsule') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: false,
      });
    } else {
      this.setData({
        typeCapsule: false,
        typeHasSubTitle: false,
      });
    }
  },
  plusChange(e) {
    if (e.detail.value === 'hasnt') {
      this.setData({
        hasPlus: false,
      });
    } else {
      this.setData({
        hasPlus: true,
      });
    }
  },
  // heightChange(e) {
  //   if (e.detail.value === 'hasnt') {
  //     this.setData({
  //       hasContentHeight: false,
  //     });
  //   } else {
  //     this.setData({
  //       hasContentHeight: true,
  //     });
  //   }
  // },
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
});
