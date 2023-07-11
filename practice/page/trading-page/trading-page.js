const app = getApp()
Page({
  data: {
    companies:[]

  },
  onLoad() {
    this.getCompanyList()
  },

  toTradingDetail(e){
    let {symbol} = e.currentTarget.dataset
    my.navigateTo({
      url:`/page/trading-detail/trading-detail?symbol=${symbol}`,
    })
  },

  getCompanyList(){

    app.refreshAccessToken()
    .then((result)=>{

      my.request({
        url: app.globalData.address + "/companies",
        method:"get",
        headers:{
          access_token: my.getStorageSync({key:"accessToken"}).data ,
          'ngrok-skip-browser-warning': 'true',
        
        },
        success:(data) =>{
          this.setData({companies:data.data})
        },
        fail: (err) =>{
          console.log(err);
        },
        complete:(result)=>{
        }
      })

    })
    .catch((error)=>{
      app.logOut()
    })
  }
});
