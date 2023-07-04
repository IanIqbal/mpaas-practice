const app = getApp()
Page({
  data: {
    quotes: [],
    screenWidth: 0,
    screenHeight: 0,
    limit:30
  },
  onLoad() {
    let {
      screenHeight,
      screenWidth
    } = my.getSystemInfoSync()
    console.log(my.getSystemInfoSync());
    this.setData({
      screenHeight,
      screenWidth
    })
    this.getQuotes()
  },
  onShow() {

    let token = my.getStorageSync({
      key: "accessToken"
    })
    if (!token.data) {
      my.navigateTo({
        url: "/page/login/login"
      })

    }
  },
  onReachBottom(){
    if(this.data.limit < 100){
      this.setData({limit: this.data.limit+10})
      this.getQuotes()
    }
  },
  getQuotes() {

    app.refreshAccessToken()
      .then((result) => {

        my.showLoading({
          content: "Loading...",

        });
        my.request({
          url: `https://dummyjson.com/quotes?limit=${this.data.limit}`,
          method: "get",
          dataType: "json",
          success: (res) => {
            console.log("fetch success");
            this.setData({
              quotes: res.data
            })
          },
          fail: function (res) {
            console.log(res);
          },
          complete: () => {
            my.hideLoading();
            console.log(this.data.quotes);

          }
        })
      })
      .catch((error) => {
        my.hideLoading();
        app.logOut()
      })


  },
  toDetail(e) {
    console.log(e.currentTarget);
    let {
      id
    } = e.currentTarget.dataset
    my.navigateTo({
      url: "/page/detail/detail?id=" + id
    })
  },
  onCanvasReady() {
    console.log("test");
    my.createSelectorQuery().select('#canvas').node().exec(res => {
      const canvas = res[0].node
      const gl = canvas.getContext('webgl')
      gl.clearColor(1, 1, 0, 1)
      gl.clear(gl.COLOR_BUFFER_BIT)
    })
  },
  onReady() {
    this.point = {
      x: Math.random() * this.data.screenWidth,
      y: Math.random() * this.data.screenWidth,
      dx: 1,
      dy: 0
    };
    this.interval = setInterval(this.draw.bind(this), 17);

  },
  draw() {
    var ctx = my.createCanvasContext('canvas');
    ctx.setFillStyle('#FFF');

    ctx.fillRect(0, 0, this.data.screenWidth + "px", this.data.screenHeight + "px");

    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);

    ctx.arc(this.point.x / 3, this.point.y / 3, 30, 0, 2 * Math.PI);
    ctx.arc(this.point.x / 2, this.point.y / 2, 30, 0, 2 * Math.PI);
    ctx.arc(this.point.x / 4, this.point.y / 4, 30, 0, 2 * Math.PI);
    ctx.arc(this.point.x / 5, this.point.y / 5, 30, 0, 2 * Math.PI);
    ctx.setFillStyle("#E57C23");

    ctx.fill();

    ctx.draw();



    this.point.x += this.point.dx;
    this.point.y += this.point.dy;
    if (this.point.x <= 0 || this.point.x >= this.data.screenWidth) {
      this.point.dx = -this.point.dx;

    }
    if (this.point.y <= 0 || this.point.y >= this.data.screenWidth) {
      this.point.dy = -this.point.dy;
    }
  },
  drawBall() {},
  log(e) {
    if (e.touches && e.touches[0]) {
      console.log(e.type, e.touches[0].x, e.touches[0].y);
    } else {
      console.log(e.type);
    }
  },
  onUnload() {
    clearInterval(this.interval)
  }

})