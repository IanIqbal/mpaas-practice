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
        url: "https://f778-103-144-175-27.ngrok-free.app" + "/companies",
        method:"get",
        headers:{access_token: my.getStorageSync({key:"accessToken"}).data },
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
