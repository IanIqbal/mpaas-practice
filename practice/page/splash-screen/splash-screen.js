Page({
  data: {},
  onLoad() {

  },

  onShow(){
  setTimeout(() => {
      if(my.getStorageSync({key:"accessToken"})){
        my.switchTab({
          url: '/page/tabBar/home/home'
        });
      }else{
        my.navigateTo({url:"/page/login/login"})
      }
  }, 2000);
  }
});
