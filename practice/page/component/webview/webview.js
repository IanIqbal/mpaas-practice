Page({
  data: {},
   onShareAppMessage(options) {
    my.alert({content:JSON.stringify(options.webViewUrl)});
    return {
      title: 'share web-View assembly',
      desc: 'View Components are common',
      path: 'page/component/component-pages/webview/baidu',
      'web-view': options.webViewUrl,
    };
  },
  onmessage(e){
    my.alert({
      content: 'Get the data'+JSON.stringify(e), // alert Title of the box
    });
  }
});