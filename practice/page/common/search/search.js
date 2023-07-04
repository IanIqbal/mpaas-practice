import debounce from '/util/debounce';

const componentList = [
  { name: 'Amount input', thumb: '/image/icon/amount-input.png', path: '/page/component/amount-input/amount-input', suggestion: 'amountinputAmount input' },
  { name: 'Button', thumb: '/image/icon/button.png', path: '/page/component/button/button', suggestion: 'buttonButton' },
  { name: 'calendar', thumb: '/image/icon/calendar.png', path: '/page/component/calendar/calendar', suggestion: 'calendarcalendar' },
  { name: 'card', thumb: '/image/icon/card.png', path: '/page/component/card/card', suggestion: 'cardcard' },
  { name: 'check box', thumb: '/image/icon/checkbox.png', path: '/page/component/checkbox/checkbox', suggestion: 'checkboxcheck box' },
  { name: 'Radio ', thumb: '/image/icon/radio.png', path: '/page/component/radio/radio', suggestion: 'radioRadio ' },
  { name: 'Cloud customer service', thumb: '/image/icon/contact-button.png', path: '/page/component/contact-button/contact-button', suggestion: 'contactbuttonCloud customer service' },
  { name: 'canvas', thumb: '/image/icon/canvas.png', path: '/page/component/canvas/canvas', suggestion: 'canvascanvas' },
  { name: 'screen', thumb: '/image/icon/filter.png', path: '/page/component/filter/filter', suggestion: 'filterscreen' },
  { name: 'footer', thumb: '/image/icon/footer.png', path: '/page/component/footer/footer', suggestion: 'footerfooter' },
  { name: 'form ', thumb: '/image/icon/form.png', path: '/page/component/form/form', suggestion: 'formform ' },
  { name: 'Gong Ge', thumb: '/image/icon/grid.png', path: '/page/component/grid/grid', suggestion: 'gridGong Ge' },
  { name: 'Icon', thumb: '/image/icon/icon.png', path: '/page/component/icon/icon', suggestion: 'iconIcon' },
  { name: 'Icon', thumb: '/image/icon/icon.png', path: '/page/component/am-icon/am-icon', suggestion: 'iconIcon' },
  { name: 'picture', thumb: '/image/icon/image.png', path: '/page/component/image/image', suggestion: 'imagepicture媒体' },
  { name: 'Text input', thumb: '/image/icon/input.png', path: '/page/component/input-item/input-item', suggestion: 'inputitemText input' },
  { name: 'label', thumb: '/image/icon/label.png', path: '/page/component/label/label', suggestion: 'labellabel' },
  { name: 'Jump to life number', thumb: '/image/icon/lifestyle.png', path: '/page/component/lifestyle/lifestyle', suggestion: 'lifestyleJump to life number' },
  { name: 'list', thumb: '/image/icon/form.png', path: '/page/component/list/list', suggestion: 'listlist' },
  { name: 'Map', thumb: '/image/icon/map.png', path: '/page/component/map/map', suggestion: 'mapMap' },
  { name: 'Results page', thumb: '/image/icon/message.png', path: '/page/component/message/massage', suggestion: 'messageResults page' },
  { name: 'dialog box', thumb: '/image/icon/modal.png', path: '/page/component/modal/modal', suggestion: 'modaldialog box' },
  { name: 'Navigation', thumb: '/image/icon/navigator.png', path: '/page/component/navigator/navigator', suggestion: 'navigatorNavigation' },
  { name: 'Bulletin board', thumb: '/image/icon/notice.png', path: '/page/component/notice/notice', suggestion: 'noticeBulletin board' },
  { name: 'logo ', thumb: '/image/icon/view.png', path: '/page/component/badge/badge', suggestion: 'badgelogo ' },
  { name: 'Exception page', thumb: '/image/icon/page-result.png', path: '/page/component/page-result/page-result', suggestion: 'pageresult局部Exception page面' },
  { name: 'selector', thumb: '/image/icon/picker.png', path: '/page/component/picker/picker', suggestion: 'pickerselector' },
  { name: 'Selector view', thumb: '/image/icon/picker-view.png', path: '/page/component/picker-view/picker-view', suggestion: 'pickerviewSelector view' },
  { name: 'Bubble', thumb: '/image/icon/popover.png', path: '/page/component/popover/popover', suggestion: 'popoverBubble' },
  { name: 'Pop-up Menu ', thumb: '/image/icon/popup.png', path: '/page/component/popup/popup', suggestion: 'popupPop-up Menu ' },
  { name: 'progress bar', thumb: '/image/icon/progress.png', path: '/page/component/progress/progress', suggestion: 'progressprogress bar' },
  { name: 'Search box', thumb: '/image/icon/search-bar.png', path: '/page/component/search-bar/search-bar', suggestion: 'searchbarSearch box' },
  { name: 'Sliding bar', thumb: '/image/icon/slider.png', path: '/page/component/slider/slider', suggestion: 'sliderSliding bar' },
  { name: 'Stepper', thumb: '/image/icon/stepper.png', path: '/page/component/stepper/stepper', suggestion: 'stepperStepper' },
  { name: 'Step bar', thumb: '/image/icon/steps.png', path: '/page/component/steps/steps', suggestion: 'stepsStep bar' },
  { name: 'Slidable cell', thumb: '/image/icon/swipe-action.png', path: '/page/component/swipe-action/swipe-action', suggestion: 'swipeactionSlidable cell手势' },
  { name: 'switch', thumb: '/image/icon/switch.png', path: '/page/component/switch/switch', suggestion: 'switchswitch' },
  { name: 'Top tab', thumb: '/image/icon/tabs.png', path: '/page/component/tabs/tabs', suggestion: 'tabsTop tab' },
  { name: 'Multiline input box', thumb: '/image/icon/textarea.png', path: '/page/component/textarea/textarea', suggestion: 'textareaMultiline input box' },
  { name: 'guide', thumb: '/image/icon/tips.png', path: '/page/component/tips/tips', suggestion: 'tips提示guide' },
  { name: 'Vertical tab', thumb: '/image/icon/vtabs.png', path: '/page/component/vtabs/vtabs', suggestion: 'vtabsVertical tab' },
  { name: 'Embeddedwebview', thumb: '/image/icon/webview.png', path: '/page/component/webview/webview', suggestion: 'webviewEmbeddedwebview' },
  { name: 'Base view', thumb: '/image/icon/view.png', path: '/page/component/view/view', suggestion: 'viewView container' },
  { name: 'Slide view', thumb: '/image/icon/swiper.png', path: '/page/component/swiper/swiper', suggestion: 'swiperSlide view容器' },
  { name: 'Scroll view', thumb: '/image/icon/scroll-view.png', path: '/page/component/scroll-view/scroll-view', suggestion: 'scrollviewScroll view' },
  { name: 'Input box', thumb: '/image/icon/input.png', path: '/page/component/input/input', suggestion: 'inputInput box文本输入' },
  { name: 'written words', thumb: '/image/icon/text.png', path: '/page/component/text/text', suggestion: 'text文本written words' },
  { name: 'container', thumb: '/image/icon/container.png', path: '/page/component/container/index', suggestion: 'containercontainer' },
  { name: 'Module title', thumb: '/image/icon/navigator.png', path: '/page/component/title/index', suggestion: 'titletitle' },
  { name: 'List element', thumb: '/image/icon/list-item.png', path: '/page/component/list-item/index', suggestion: 'list-itemList element' },
  { name: 'Ticket', thumb: '/image/icon/coupon.png', path: '/page/component/coupon/index', suggestion: 'couponTicket优惠券' },
  { name: 'agreement', thumb: '/image/icon/terms.png', path: '/page/component/terms/index', suggestion: 'termsagreement条款' },
  { name: 'Fold panel', thumb: '/image/icon/collapse.png', path: '/page/component/collapse/index', suggestion: 'collapseFold more accordions' },
  { name: 'label', thumb: '/image/icon/tag.png', path: '/page/component/tag/index', suggestion: 'taglabel' },
  { name: 'Background mask', thumb: '/image/icon/mask.png', path: '/page/component/mask/mask', suggestion: 'mask遮罩Background mask' },
  { name: 'Mask guidance', thumb: '/image/icon/guide.png', path: '/page/component/guide/guide', suggestion: 'guideMask guidance新手指引' },
  { name: 'head portrait', thumb: '/image/icon/avatar.png', path: '/page/component/avatar/index', suggestion: 'avatar用户head portrait' },
  { name: 'Verification code input', thumb: '/image/icon/verifycode.png', path: '/page/component/verify-code/index', suggestion: 'verify-codeVerification code input框' },
  { name: 'Select input', thumb: '/image/icon/picker.png', path: '/page/component/picker-item/index', suggestion: 'picker-itemSelect input' },
  { name: 'Long password box', thumb: '/image/icon/longpassword.png', path: '/page/component/long-password/index', suggestion: 'long-passwordLong password input box' },
  { name: 'Multiline input', thumb: '/image/icon/textarea.png', path: '/page/component/multi-liner/index', suggestion: 'multi-linerMultiline inputtextarea' },
  { name: 'Button', thumb: '/image/icon/button.png', path: '/page/component/button-ali-ui/index', suggestion: 'buttonButton' },
  { name: 'switch', thumb: '/image/icon/switch.png', path: '/page/component/switch-ali-ui/index', suggestion: 'switchswitch' },
  { name: 'Single choice', thumb: '/image/icon/radio-aliui.png', path: '/page/component/radio-ali-ui/index', suggestion: 'radioSingle choice' },
  { name: 'Page break', thumb: '/image/icon/pagination.png', path: '/page/component/pagination/index', suggestion: 'paginationPage break' },
  { name: 'Alphabet index', thumb: '/image/icon/alphabet.png', path: '/page/component/alphabet/index', suggestion: 'alphabetAlphabet index' },
  { name: 'load', thumb: '/image/icon/loading.png', path: '/page/component/loading/loading', suggestion: 'loadingload动画' },
];

const apiList = [
  { name: 'Obtain authorization code', path: '/page/API/get-auth-code/get-auth-code', suggestion: 'getauthcodeObtain authorization code' },
  { name: 'Get grant information', path: '/page/API/get-user-info/get-user-info', suggestion: 'getuserinfoGet user information' },
  { name: 'Initiate payment', path: '/page/API/request-payment/request-payment', suggestion: 'requestpaymentInitiate payment' },
  { name: 'Alipay card bag', path: '/page/API/card-pack/card-pack', suggestion: 'cardpackAlipay card bag' },
  { name: 'Sesame credit loan and repayment', path: '/page/API/zm-credit-borrow/zm-credit-borrow', suggestion: 'zmcreditborrowSesame credit loan and repayment' },
  { name: 'Text risk identification', path: '/page/API/text-risk-identification/text-risk-identification', suggestion: 'textriskidentificationRisk text identification' },
  { name: 'Warning box', path: '/page/API/alert/alert', suggestion: 'alertWarning box' },
  { name: 'Confirmation box', path: '/page/API/confirm/confirm', suggestion: 'confirmConfirmation box' },
  { name: 'Weak prompt', path: '/page/API/toast/toast', suggestion: 'toastWeak prompt' },
  { name: 'Load prompt', path: '/page/API/loading/loading', suggestion: 'loadingLoad prompt' },
  { name: 'Operation menu', path: '/page/API/action-sheet/action-sheet', suggestion: 'actionsheetOperation menu' },
  { name: 'Set interface navigation bar', path: '/page/API/set-navigation-bar/set-navigation-bar', suggestion: 'setnavigationbarSet interface navigation bar' },
  { name: 'set upoptionMenu', path: '/page/API/option-menu/option-menu', suggestion: 'optionmenuset upoptionmenu' },
  { name: 'Page Jump', path: '/page/API/navigator/navigator', suggestion: 'navigatorPage Jump' },
  { name: 'Pull down refresh', path: '/page/API/pull-down-refresh/pull-down-refresh', suggestion: 'pulldownrefreshPull down refresh' },
  { name: 'Create animation', path: '/page/API/animation/animation', suggestion: 'animationCreate animation' },
  { name: 'Create painting', path: '/page/API/canvas/canvas', suggestion: 'canvasCreate painting画布' },
  { name: 'Select date', path: '/page/API/date-picker/date-picker', suggestion: 'datepickerSelect date选择' },
  { name: 'Scroll page', path: '/page/API/page-scroll-to/page-scroll-to', suggestion: 'pagescrolltoScroll page' },
  { name: 'Node query', path: '/page/API/create-selector-query/create-selector-query', suggestion: 'createselectorqueryNode query' },
  { name: 'contacts', path: '/page/API/contact/contact', suggestion: 'contactcontacts' },
  { name: 'Title block load animation', path: '/page/API/navigation-bar-loading/navigation-bar-loading', suggestion: 'navigationbarloadingTitle block load animation' },
  { name: 'Select city', path: '/page/API/choose-city/choose-city', suggestion: 'choosecitySelect city选择' },
  { name: 'Hide keyboard', path: '/page/API/keyboard/keyboard', suggestion: 'hidekeyboardHide keyboard' },
  { name: 'Cascade selection', path: '/page/API/multi-level-select/multi-level-select', suggestion: 'multilevelselectCascade selection' },
  { name: 'Option selection', path: '/page/API/options-select/options-select', suggestion: 'multilevelselectCascade selection' },
  { name: 'Get mobile network status', path: '/page/API/get-network-type/get-network-type', suggestion: 'getnetworktypeGet mobile network status' },
  { name: 'Get mobile system information', path: '/page/API/get-system-info/get-system-info', suggestion: 'getsysteminfoGet mobile system information' },
  { name: 'Vibration', path: '/page/API/vibrate/vibrate', suggestion: 'vibrateVibration' },
  { name: 'clipboard', path: '/page/API/clipboard/clipboard', suggestion: 'clipboardclipboard' },
  { name: 'Get basic library version', path: '/page/API/sdk-version/sdk-version', suggestion: 'sdkversionGet basic library version' },
  { name: 'Screen brightness', path: '/page/API/screen/screen', suggestion: 'screenScreen brightness' },
  { name: 'Shake it', path: '/page/API/watch-shake/watch-shake', suggestion: 'watchshakeShake it' },
  { name: 'Make a call', path: '/page/API/make-phone-call/make-phone-call', suggestion: 'makephonecallMake a call' },
  { name: 'User screenshot event', path: '/page/API/user-capture-screen/user-capture-screen', suggestion: 'usercapturescreenUser screenshot event' },
  { name: 'Get server time', path: '/page/API/get-server-time/get-server-time', suggestion: 'getservertimeGet server time' },
  { name: 'Out of memory warning', path: '/page/API/memory-warning//memory-warning', suggestion: 'memorywarningOut of memory warning' },
  { name: 'launchHTTPrequest', path: '/page/API/request/request', suggestion: 'requestlaunchrequestlaunchhttprequest网络' },
  { name: 'Upload file', path: '/page/API/upload-file/upload-file', suggestion: 'uploadfileUpload file网络' },
  { name: 'Download File', path: '/page/API/download-file/download-file', suggestion: 'downloadfileDownload File网络' },
  { name: 'Websocket', path: '/page/API/websocket/websocket', suggestion: 'websocketnetwork' },
  { name: 'picture', path: '/page/API/image/image', suggestion: 'imagepicture多媒体' },
  { name: 'Get picture information', path: '/page/API/get-image-info/get-image-info', suggestion: 'getimageinfoGet picture information' },
  { name: 'Compressed picture', path: '/page/API/compress-image/compress-image', suggestion: 'compressimageCompressed picture' },
  { name: 'Get current location', path: '/page/API/get-location/get-location', suggestion: 'getlocationGet current location地图' },
  { name: 'View location using native map', path: '/page/API/open-location/open-location', suggestion: 'openlocationView location using native map' },
  { name: 'Open map select location', path: '/page/API/choose-location/choose-location', suggestion: 'chooselocationOpen map select location' },
  { name: 'cache', path: '/page/API/storage/storage', suggestion: 'storagecache' },
  { name: 'Scanning code Scan', path: '/page/API/scan-code/scan-code', suggestion: 'scan-codeScanning code' },
  { name: 'Custom sharing', path: '/page/API/share/share', suggestion: 'shareCustom sharing' },
  { name: 'file', path: '/page/API/file/file', suggestion: 'filefile' },
  { name: 'Bluetooth', path: '/page/API/bluetooth/bluetooth', suggestion: 'bluetoothBluetooth' },
  { name: 'data security', path: '/page/API/rsa/rsa', suggestion: 'rsadata security' },
  { name: 'Custom analysis', path: '/page/API/report-analytics/report-analytics', suggestion: 'reportanalyticsData analysis' },
  { name: 'Container events', path: '/page/API/events/events', suggestion: 'eventsContainer events' },
  { name: 'OCR', path: '/page/API/ocr/ocr', suggestion: 'ocr' },
  { name: 'Collection', path: '/page/API/favorite/favorite', suggestion: 'favorite'},
]

Page({
  data: {
    value: '',
    history: my.getStorageSync({ key: 'searchHistory' }).data || [],
    hot: [
      { name: 'ScrollView', url: '/page/component/scroll-view/scroll-view' },
      { name: 'Map', url: '/page/component/map/map' },
      { name: 'Icon', url: '/page/component/icon/icon' },
      { name: 'Card', url: '/page/component/card/card' },
      { name: 'Obtain authorization code', url: '/page/API/get-auth-code/get-auth-code' },
      { name: 'Popup', url: '/page/component/popup/popup' },
      { name: 'launchHTTPrequest', url: '/page/API/request/request' },
      { name: 'canvas', url: '/page/component/canvas/canvas' },
      { name: 'Navigation', url: '/page/API/navigator/navigator' },
    ],
    componentSuggestions: [],
    apiSuggestions: [],
  },
  onLoad() {
    this.setData({
      history: my.getStorageSync({ key: 'searchHistory' }).data,
    });
    console.log(my.getStorageSync({ key: 'searchHistory' }).data);
    this.onInput = debounce(this.onInput.bind(this), 400);
    my.setNavigationBar({
      borderBottomColor: '#fff',
    });
  },
  clear() {
    my.confirm({
      content: 'Confirm to delete relevant history？',
      success: (res) => {
        if (res.confirm) {
          my.clearStorage();
          this.setData({
            history: [],
          });
        }
      },
    })
  },
  onInput(keyword) {
    this.setData({
      value: keyword,
    });
    const regExp = /[A-Za-z]/;
    if (keyword === '' || (regExp.test(keyword) && keyword.length === 1)) {
      this.setData({
        componentSuggestions: [],
        apiSuggestions: [],
      });
      return;
    }
    const componentSuggestions = [];
    const apiSuggestions = [];
    for (let i = 0; i < componentList.length; i++) {
      if (componentList[i].suggestion.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1) {
        componentSuggestions.push(componentList[i]);
      }
    }

    for (let i = 0; i < apiList.length; i++) {
      if (apiList[i].suggestion.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1) {
        apiSuggestions.push(apiList[i]);
      }
    }
    this.setData({ componentSuggestions, apiSuggestions })
  },
  onClear() {
    this.setData({
      value: '',
    });
  },
  onCancel() {
    this.setData({
      componentSuggestions: [],
      apiSuggestions: [],
      value: '',
    });
    my.navigateBack();
  },
  onItemTap({ name }) {
    this.setData({
      value: name,
    });

    this.onInput(name);
  },
  onListItemTap(e) {
    const { name, url } = e.target.dataset;
    this.addToHistory(name);
    console.log(url)
    my.navigateTo({ url: url });
  },
  addToHistory(keyword) {
    const searchHistory = my.getStorageSync({ key: 'searchHistory' }).data || [];
    let index = -1;

    for (let i = 0; i < searchHistory.length; i++) {
      if (searchHistory[i].name === keyword) {
        index = i;
        break;
      }
    }

    let history = [];

    if (searchHistory.length >= 8) {
      if (index === -1) {
        history = [{ name: keyword }, ...searchHistory.slice(0, 7)];
      } else {
        searchHistory.splice(index, 1).slice(0, 7)
        history = [{ name: keyword }, ...searchHistory];
      }
    } else {
      if (index === -1) {
        history = [{ name: keyword }, ...searchHistory];
      } else {
        searchHistory.splice(index, 1) 
        history = [{ name: keyword }, ...searchHistory];
      }
    }

    my.setStorageSync({
      key: 'searchHistory',
      data: history,
    });

    this.setData({
      history,
    })
  }
});