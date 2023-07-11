const app = getApp()
Component({
  mixins: [],
  data: {
    isAgree:{
      name:"i agree to terms and conditions",
      checked:false,
      value:true
    },
    buttonStatus:false
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    checkHandler(e){
      this.setData({buttonStatus: e.detail.value})
    },
    
    agreementHandler(){

      if(this.data.buttonStatus){

        app.refreshAccessToken()
        .then((result)=>{
          
        my.request({
          url: 'http://localhost:3001/users/status',
          dataType: "json",
          method: "patch",
          headers: {
            access_token: my.getStorageSync({key:"accessToken"}).data
          },
          timeout: 30000,
          success: (result) => {
            my.switchTab({
              url: '/page/tabBar/home/home'
            });
          },
          fail: (error) => {
            console.log(error);
          },
          complete: () => {
            
          }
        });
      })
      .catch((error)=>{
        app.logOut()
      })
    }
    }
  },
});
