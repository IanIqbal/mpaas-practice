// const imgUrl = '';
const newitems = [
  {
    thumb:
      'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
    title: 'Fixed to head',
    arrow: true,
    sticky: true,
  },
  {
    title: 'Title text does not wrap very long very long very long very long very long',
    arrow: true,
  },
  {
    title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'No Arrow ',
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'Vertical alignment of child elements',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'No Arrow ',
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'Vertical alignment of child elements',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'No Arrow ',
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'Vertical alignment of child elements',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'No Arrow ',
    textMode: 'wrap',
  },
  {
    title: 'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
    extra: 'Vertical alignment of child elements',
    textMode: 'wrap',
    align: 'top',
  },
];
Page({
  data: {
    items: [
      {
        title: 'Single list table1',
        extra: 'detailed information',
        arrow: true,
      },
      {
        title: 'Single list table2',
        extra: '+20.08',
        arrow: true,
        enforceExtra: true,
      },
      {
        title: 'singel line switch3',
        actionType: 'switch',
        index: 'switch',
        lineTouchable: false,
      },
      {
        title: 'single line checkbox4',
        actionType: 'check',
        // actionValue: false,
        index: 'check',
      },
      {
        title: 'Single list table5',
        actionType: 'capsule',
        capsuleContent: 'Capsule button',
      },
    ],
    items2: [
      {
        title: 'list',
        arrow: true,
      },
      {
        title: 'list',
      },
      {
        title: 'list',
      },
      {
        title: 'list',
      },
      {
        title: 'list',
      },
    ],
    items3: [
      {
        title: 'Two line list',
        brief: 'Descriptive information',
        arrow: true,
      },
    ],
    items4: [
      {
        title: 'Three line list',
        upperSubtitle: 'Top subtitle',
        lowerSubtitle: 'Next subtitle',
        titlePosition: 'top',
        arrow: true,
      },
      {
        title: 'Three line list',
        upperSubtitle: 'Top subtitle',
        lowerSubtitle: 'Next subtitle',
        titlePosition: 'middle',
        arrow: true,
      },
      {
        title: 'Three line list',
        upperSubtitle: 'Top subtitle',
        lowerSubtitle: 'Next subtitle',
        titlePosition: 'bottom',
        arrow: true,
      },
    ],
    itemsThumb: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: 'Title Text',
        extra: 'Description text',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: 'Title Text',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: 'Title Text',
        arrow: true,
      },
    ],
    itemsThumbMultiple: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: 'Title Text',
        brief: 'Descriptive information',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: 'Title Text',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: 'Title Text',
      },
    ],
    items5: [
      {
        thumb:
          'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
        title: 'Fixed to head',
        brief: 'Descriptive information',
        arrow: true,
        sticky: true,
      },
      {
        title: 'Title text does not wrap very long very long very long very long very long',
        arrow: true,
        align: 'middle',
      },
      {
        title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
        arrow: true,
        align: 'top',
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'No Arrow ',
        align: 'bottom',
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'Vertical alignment of child elements',
        align: 'top',
      },
      {
        title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
        arrow: true,
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'No Arrow ',
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'Vertical alignment of child elements',
        align: 'top',
      },
      {
        title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
        arrow: true,
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'No Arrow ',
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'Vertical alignment of child elements',
        align: 'top',
      },
      {
        title: 'Title text wrapping is very long, very long, very long, very long, very long, very long',
        arrow: true,
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'No Arrow ',
      },
      {
        title:
          'The title text is very long, very long, very long, very long, very long, very long, very long, very long, very long',
        extra: 'Vertical alignment of child elements',
        align: 'middle',
      },
    ],
    loadMore: '',
    loadContent: ['Load more data without stopping...', '-- It is over，No --'],
    maxList: 5,
    switchValues: {
      // switch: true,
      // check: false,
    },
    checkValues: {},
    thumb: 'https://gw-office.alipayobjects.com/basement_prod/47775269-5c8e-40b8-bcda-43380022f311.jpg',
    changeCheckbox: true,
    changeSwitch: true,
  },
  onLoad() {
    const charCode = 65;
    const charList = [];
    for (let i = 0; i < 26; i++) {
      charList.push(String.fromCharCode(charCode + i));
    }
    this.setData({
      alphabet: charList,
    });
  },
  onItemClick(ev) {
    if (ev.detail && ev.index === 'check') {
      this.setData({
        actionValues: {
          ...this.data.actionValues,
          [ev.index]: ev.detail.value,
        },
      });
    } else {
      my.alert({
        content: `Click on page${ev.index}that 's ok`,
      });
    }
  },
  onSwitchClick() {
    this.setData({
      changeSwitch: !this.data.changeSwitch,
    });
    my.alert({
      content: 'switch changed',
    });
  },
  onCheckClick() {
    this.setData({
      changeCheckbox: !this.data.changeCheckbox,
    });
    my.alert({
      content: 'checkbox changed',
    });
  },
  onCapsuleClick() {
    my.alert({
      content: 'capsule button click',
    });
  },
  onScrollToLower() {
    this.setData({
      loadMore: 'load',
    });
    const { items5 } = this.data;
    // 加入 maxList 用于判断“假设”数据加载完毕后的情况
    if (this.data.maxList > 0) {
      const newItems = items5.concat(newitems);
      const MAXList = this.data.maxList - 1;
      this.setData({
        items5: newItems,
        maxList: MAXList,
      });
    } else {
      // 数据加载完毕之后，改变 loadMore 为 over 即可
      this.setData({
        loadMore: 'over',
      });
    }
  },
  onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data),
    });
  },
});
