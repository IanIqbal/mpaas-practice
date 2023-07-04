const app = getApp()

Page({
  data: {
    agreementModal:false
  },
  onLoad() {},
  onShow(){
    
  },
  submitHandler(e){
    console.log(e);
    let {username, password} = e.detail.value

    my.httpRequest({
      url: 'http://localhost:3001/users/login',
      headers: {},
      method: 'post',
      data: {
        password, 
        username,
        error:{
          message:"",
          status:false,
          type:"error"
        }
      },
      timeout: 30000,
      dataType: "JSON",
      success: (result) => {
        console.log(result);

        my.setStorageSync({key:"accessToken",data:result.data.accessToken})
        my.setStorageSync({key:"refreshToken", data:result.data.refreshToken})

        app.globalData.username = result.data.username
        
        if(!result.data.isAgree){
          this.setData({agreementModal: !this.data.agreementModal})
        }else{
          my.switchTab({
            url: '/page/tabBar/home/home'
          })
        }
      

      },
      fail: (error) => {
        console.log(error);
        this.setData({error: {message: error.data.message, status:true}})
      
      },
      complete: (result) => {
        console.log(result);
    
      }
    });

  
  },
  handleCloseToast(){
    this.setData({error:{...this.data.error, status:false}})
  }
  
});
