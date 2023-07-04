// 获取应用实例
const app = getApp();

Page({
  data: {
    appid: 'aaaaaaaa',
    websocketServer: 'Developer server interface address，Must be wss agreement，且域名Must be后台配置的合法域名',
    sendMessageAbility: false,
    toSendMessage: 'test',
    closeLinkAbility: false,
    log: '',
  },

  onLoad() {
    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketClose((res) => {
      my.alert({content: 'Connection closed！'});
      this.setData({
        sendMessageAbility: false,
        closeLinkAbility: false,
      });
    });
    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketOpen((res) => {
      my.alert({content: 'Connection opened！'});
      this.setData({
        sendMessageAbility: true,
        closeLinkAbility: true,
      });
    });

    my.onSocketError(function(res){
      my.alert('WebSocket Connection open failed，Please check！' + res);
    });

    // 注意： 回调方法的注册在整个小程序启动阶段只要做一次，调多次会有多次回调
    my.onSocketMessage((res) => {
      my.alert({content: 'Data received！' + JSON.stringify(res)});
    });
  },

  onServerAddressComplete(e) {
    this.setData({
      websocketServer:e.detail.value,
    });
  },

  onSendMessageReady(e) {
    this.setData({
      toSendMessage:e.detail.value,
    });
  },

  connect_start() {
    my.connectSocket({
      url: this.data.websocketServer, // Developer server interface address，Must be wss agreement，且域名Must be后台配置的合法域名
      success: (res) => {
        my.showToast({
          content: 'success', // Text content
        });
      },
      fail:()=>{
        my.showToast({
          content: 'fail', // Text content
        });
      }
    });
  },

  send_start() {
    my.sendSocketMessage({
      data: this.data.toSendMessage, // Content to be sent
      success: (res) => {
        my.alert({content: 'Data transmission！' + this.data.toSendMessage});
      },
    });
  },

  close_start() {
    my.closeSocket();
  },
});
