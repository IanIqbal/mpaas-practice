const API_KEY = '5bHfn1mJITAjAPpP3daUhFGSpTzyRYNWApQEryydYWwx3aWcpvqMHoOf'
const app = getApp()
Page({
  data: {
    quote: {},
    isLoading: false,
    photo: {}
  },
  onLoad(query) {

    this.setData({
      isLoading: true
    })

    this.getDetail(query.id)
    this.getPictures()
  },
  onShow() {

  },
  onPullDownRefresh() {
    this.getPictures()
  },
  getDetail(id) {
    my.showLoading({
      content: 'Loading',
    })

    app.refreshAccessToken()
    .then((result)=>{
      my.request({
        url: "https://dummyjson.com/quotes/" + id,
        method: "get",
        dataType: "json",
        success: (res) => {
          let {
            data
          } = res
          this.setData({
            quote: data
          })
        },
        fail: (err) => {
          console.log(err);
        },
        complete: () => {
          my.hideLoading()
  
        }
      })
    })
    .catch((error)=>{
      my.hideLoading()
      app.logOut()
    })
    

  },

  getPictures() {

    my.showLoading({
      content: "Loading"
    })
    let randomNum = Math.ceil(Math.random() * 8000)

    app.refreshAccessToken()
    .then((result)=>{
      my.httpRequest({
        url: `https://api.pexels.com/v1/search?query=nature&page=${randomNum}&per_page=1`,
        headers: {
          Authorization: API_KEY
        },
        method: 'GET',
        timeout: 30000,
        dataType: "JSON",
        success: (result) => {
          this.setData({
            photo: result.data.photos[0]
          })
        },
        fail: (error) => {
          console.log(error);
        },
        complete: () => {
          my.hideLoading();
          this.setData({
            isLoading: false
          })
          my.stopPullDownRefresh()
  
        }
      });
    })
    .catch((error)=>{
      app.logOut()
    })
  },
  onUnload() {
    this.setData({
      quote: {}
    })
  }
})