const app = getApp()
Page({
  data: {
    cart:[],
    totalSelected:0,
    products: [],
    showPopup: false,
    detailProduct: {},
    cartLocation: {
      x: 100,
      y: 100
    },
    limit: 30,
    isSearch:false
  },

  handlePopup(e) {
    if (e) {

      let {product} = e.currentTarget.dataset

      this.setData({
        detailProduct: product
      })

    }

    this.setData({
      showPopup: !this.data.showPopup
    })

  },

  onLoad() {
    this.getProducts()
   
  },

  onShow(){
    
    if(my.getStorageSync({key:"cart"}).data && my.getStorageSync({key:"totalSelected"}).data){
      app.globalData.cart = my.getStorageSync({key:"cart"}).data
      app.globalData.totalSelected = my.getStorageSync({key:"totalSelected"}).data
    }
    
    this.setData({cart: app.globalData.cart, totalSelected: app.globalData.totalSelected})
  },

  onReachBottom(){
    if(this.data.products.length < 100){
      
      this.setData({limit:this.data.limit+10})

      if(!this.data.isSearch){
        this.getProducts()
      }
    }
  },
  getProducts(search) {

    my.showLoading({
      content: "Loading"
    })
    
    if (!search){
      this.setData({isSearch:false})
    }
    let searchQuery = search? `/search?q=${search}` : `?limit=${this.data.limit}`

    app.refreshAccessToken()
    
    .then((response)=>{
      my.request({
        url: `https://dummyjson.com/products${searchQuery}`,
        headers: {},
        method: 'GET',
        dataType: "json",
        success: (result) => {
          result.data.products.forEach((el, index) => {
  
            let toRupiah = el.price * 15000
            let newOutput = {
              ...el,
              price: toRupiah,
              finalPrice: (Math.round(toRupiah - (toRupiah * el.discountPercentage / 100))),
            }
            
            newOutput.formattedPrice = this.converter(newOutput.price)
            newOutput.formattedFinalPrice = this.converter(newOutput.finalPrice)
            result.data.products[index] = newOutput
  
          })

          this.setData({
            products: result.data.products
          })

        },
        fail: (error) => {
          console.log(error);
        },
        complete: () => {
          my.hideLoading()
        }
      });
    })
    .catch((error)=>{
      my.hideLoading()
      app.logOut()
    })
   
  },

  converter(value) {

    return "Rp. " + new Intl.NumberFormat().format(value)
  },

  toCart(){
    my.navigateTo({
      url: '/page/carts/carts'
    });
  },

  searchHandler(e){
    setTimeout(()=>{
      this.setData({isSearch:true})
      this.getProducts(e.detail.value)
    }, 3000)
  }
});