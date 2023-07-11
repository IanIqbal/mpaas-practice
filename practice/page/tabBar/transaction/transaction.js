const app = getApp()
Page({
  data: {
    transactions: []
  },
  onShow() {
    this.getTransactions()
  },
  getTransactions(){

    app.refreshAccessToken()
    .then((result) =>{

            my.showLoading({
              content: 'Loading'
            });
            my.request({
              url: app.globalData.address + "/transactions",
              method:"get",
              headers:{
                access_token:my.getStorageSync({"key":"accessToken"}).data,
                "content-type":"application/json"
              },
              dataType:"json",
              success: (result)=>{
                this.setData({transactions:result.data})
              },
              fail: (error)=>{
                console.log(error);
              },
              complete: ()=>{
                my.hideLoading();
              }
            })
    })
    .catch((error)=>{
       
      app.logOut()
    })
   

  }
});
