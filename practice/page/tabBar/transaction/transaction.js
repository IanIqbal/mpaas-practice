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
      console.log(result);

            my.showLoading({
              content: 'Loading'
            });
            my.request({
              url:"http://localhost:3001/transactions",
              method:"get",
              headers:{
                access_token:my.getStorageSync({"key":"accessToken"}).data,
                "content-type":"application/json"
              },
              dataType:"json",
              success: (result)=>{
                this.setData({transactions:result.data})
                console.log(result);
              },
              fail: (error)=>{
                
                console.log(error, "<<<<<<Dari fetch");
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
