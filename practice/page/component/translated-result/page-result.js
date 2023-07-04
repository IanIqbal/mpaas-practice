Page({
  data: {
    components: [
      {
        name: 'network',
        nameZN: 'network',
        path: './network/index',
      },
      {
        name: 'local-network',
        nameZN: 'Local network',
        path: './local-network/index',
      },
      {
        name: 'busy',
        nameZN: 'Busy service',
        path: './busy/index',
      },
      {
        name: 'local-busy',
        nameZN: 'Local service is busy',
        path: './local-busy/index',
      },
      {
        name: 'error',
        nameZN: 'System error',
        path: './error/index',
      },
      {
        name: 'local-error',
        nameZN: 'Local system error',
        path: './local-error/index',
      },
      {
        name: 'logoff',
        nameZN: 'User logged off',
        path: './log-off/index',
      },
      {
        name: 'local-logoff',
        nameZN: 'Local user logged off',
        path: './local-logoff/index',
      },
      {
        name: 'empty',
        nameZN: 'Page empty status',
        path: './empty/index',
      },
      {
        name: 'local-empty',
        nameZN: 'Local empty state',
        path: './local-empty/index',
      },
      {
        name: 'payment',
        nameZN: 'Payment failed',
        path: './payment/index',
      },
      {
        name: 'local-payment',
        nameZN: 'Partial payment failed',
        path: './local-payment/index',
      },
      {
        name: 'redpacket',
        nameZN: 'Red envelope airspace',
        path: './redpacket/index',
      },
      {
        name: 'local-redpacket',
        nameZN: 'Local red envelope airspace',
        path: './local-redpacket/index',
      },
    ],
  },
  openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url,
    });
  },
});
