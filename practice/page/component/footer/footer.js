Page({
  data: {
    footerInfo1: {
      type: 'normal',
      content: 'Bottom text bottom description',
    },
    footerInfo2: {
      type: 'guide',
      content: 'Didnot find what you needed? try searching',
      extend: [
        {
          link: '/page/tabBar/component/index',
          text: 'Ant loan',
        },
        {
          link: '/page/tabBar/component/index',
          text: 'reserve',
        },
        {
          link: '/page/tabBar/component/index',
          text: 'Huabei collects money',
        },
      ],
    },
    footerInfo3: {
      type: 'copyright',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
    },
    footerInfo4: {
      type: 'brand',
      content: 'Past performance does not indicate the future performance of the product, there are risks in the market, investment should be cautious',
      extend: [
        {
          logo: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
          width: '30px',
          height: '30px',
          link: '/page/tabBar/component/index',
        },
        {
          logo: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*gWo-TLFGp38AAAAAAAAAAABkARQnAQ',
          width: '420rpx',
          height: '116rpx',
        },
      ],
    },
    footerInfo5: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [
        {
          link: '/page/tabBar/component/index',
          text: 'bottom link',
        },
      ],
    },
    footerInfo6: {
      type: 'link',
      content: '© 2004-2020 Alipay.com. All rights reserved.',
      extend: [
        {
          link: '/page/tabBar/component/index',
          text: 'bottom link',
        },
        {
          link: '/page/tabBar/component/index',
          text: 'bottom link',
        },
      ],
    },
    footerInfo7: {
      type: 'end',
      content: 'Customized bottom line with no more content',
      footerEndColor: 'red',
    },
    footerInfo8: {
      type: 'end',
      showEndIcon: true,
      iconSize: 50,
    },
  },
  brandClick() {
    my.alert({
      content: 'This brand logo has no link, the click event can be customized through js.',
    });
  },
});
