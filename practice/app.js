import jwtDecode  from "jwt-decode" 

App({
  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', my.getSystemInfoSync());
    console.log('SDKVersion', my.SDKVersion);
    my.on('nativeToTiny', (res) => {
      my.showToast({
        type: 'none',
        content: JSON.stringify(res),
        duration: 3000,
        success: () => {

        },
        fail: () => {

        },
        complete: () => {

        }
      });
    })

  },
  onShow() {
    console.log('App Show');
    my.navigateTo({
      url: "/page/splash-screen/splash-screen"
    })





    // let token = my.getStorageSync({key:"accessToken"})
    // if(!token.data){
    //   console.log("xxxxxxx");
    //   my.navigateTo({url:"/page/login/login"})
    // }

  },
  onHide() {
    console.log('App Hide');
  },

  getUserData() {
    console.log("dari app");

    return new Promise((resolve, reject) => {

      my.request({
        url: "http://localhost:3001/users",
        method: "get",
        headers: {
          "content-type": "application/json",
          "access_token": my.getStorageSync({
            key: "accessToken"
          }).data
        },
        dataType: "json",
        success: (result) => {
          // console.log(result);
          let {
            saldo,
            rekening,
            username,
            isAgree
          } = result.data
       

          resolve({
            saldo,
            rekening,
            username,
            isAgree
          })
        },
        error: (error) => {
          console.log(error);
          reject({
            error
          })
        },
        complete: () => {

        }
      })
    })

  },
  refreshAccessToken(){
    return new Promise((resolve,reject) =>{

      let decoded = jwtDecode(my.getStorageSync({key:"accessToken"}).data)
    

      if(decoded.exp < Date.now()/1000){
        console.log("expired");

        my.request({
          url:"http://localhost:3001/users/refreshAccess",
          method:"get",
          headers:{
            refresh_token: my.getStorageSync({key:"refreshToken"}).data,
            "content-type":"application/json"
          },
          dataType:"json",
          success: (result)=>{
            console.log(" refresh success");
            console.log(result);
            my.setStorageSync({"key":"accessToken", data:result.data.accessToken})
            resolve("refreshed")
          },
          fail: (error) =>{
            
            console.log(error, "<<<<< dari promise");
            my.showToast({
              content: error.data.message
            });
            reject(error)
          },
          complete:(result) =>{
  
          }
        })

      }else{
        // expired = false
        console.log("fresh");
        resolve("fresh")
      }
    })
  },
  
  logOut(){
    my.clearStorageSync();

    my.navigateTo({url:"/page/login/login"})
  },

  globalData: {
    accessToken: "",
    cart: [],
    totalSelected: 0,
    username: 0,
  },
});