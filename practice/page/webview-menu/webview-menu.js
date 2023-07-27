const app = getApp()
Page({
  data: {
    url: "",
    score: 0,
    webView: {},
    flag: false,
    flagFetch: false
  },
  onLoad(query) {
    this.setData({
      url: query.page
    })

    this.webViewContext = my.createWebViewContext("web-view-1")
    // this.setData({webView: my.createWebViewContext("web-view-1")})

    // my.setStorage({
    //   key: 'fromMini',
    //   data: "dari mpaas",
    //   success: (res) => {
    //     console.log("setStorage success");
    //   },
    //   fail: (err) => {
    //     console.log(err);
    //   },
    // });

  },
  onMessage(e) {
    let {
      message,
      score
    } = e.detail

    if (message == "Loading data") {
      
      if(!this.data.flagFetch){
        console.log(e);
        app.refreshAccessToken()

        .then((result) => {

          this.webViewContext.postMessage({
            'sendToWebView': my.getStorageSync({
              key: "accessToken"
            }).data
          })

          this.setData({flagFetch:true})
        })

        .catch((error) =>{
          console.log(error);
          app.logOut()
        })
      }
    } else if (message == "Hello from game") {
      this.setData({
        score: score
      })

      // POST SCORE TO DATABASE VIA MPAAS
      // if (!this.data.flag){
      //   console.log(e);
      //   // this.postScore()

      //   this.setData({flag:true})
      // }

      // POST SCORE TO DATABASE FROM THE GAME DIRECTLY
      if (!this.data.flag) {
        console.log(e);
        app.refreshAccessToken()
          .then((result) => {
            this.webViewContext.postMessage({
              'sendToWebView': my.getStorageSync({
                key: "accessToken"
              }).data
            })
            this.setData({
              flag: true
            })
          })
          .catch((error) => {
            app.logOut()
          })
      }

    }




    // console.log(this.webViewContext);
    // this.data.webView.postMessage({'sendToWebView':'dari mpaas'})

    // my.getStorage({
    //   key: 'accessToken',
    //   success: (res) => {
    //     console.log(res);
    //     // if (res.success) {
    //     //   console.log("执行成功");
    //     // }


    //   },
    //   fail: (err) => {
    //    objects[0].setString(err);

    //     console.log(err)
    //   }
    // });
  },

  postScore() {

    app.refreshAccessToken()
      .then((result) => {

        my.request({
          url: app.globalData.address + "/game",
          method: "POST",
          dataType: "application/json",
          data: {
            score: this.data.score
          },
          headers: {
            access_token: my.getStorageSync({
              key: "accessToken"
            }).data,
            "ngrok-skip-browser-warning": "true"
          },
          success: (data) => {
            console.log(data);
          },
          fail: (error) => {
            console.log(error);
          },
          complete: (result) => {

          }
        })

      })
      .catch((error) => {
        app.logOut()
      })
  }
});