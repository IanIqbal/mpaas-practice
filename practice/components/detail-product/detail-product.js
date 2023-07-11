const app = getApp()
const page = getCurrentPages()

Component({
  data: {
    toastStatus: false
  },
  props: {
    detailProduct: {}
  },
  methods: {
    
    addToCart() {

      let {id} = this.props.detailProduct

      let isExist = false
      let total = 0

      app.globalData.cart.forEach(el => {

        if (el.id == id) {
          el.stockSelected++
          isExist = true
        }

        total += el.stockSelected
      })

      if (!isExist) {
        this.props.detailProduct.stockSelected = 1
        app.globalData.cart.push(this.props.detailProduct)
        total++
      }

      app.globalData.totalSelected = total

      this.$page.setData({
        totalSelected: app.globalData.totalSelected,
        cart: app.globalData.cart
      })

      my.setStorageSync({
        key: "cart",
        data: app.globalData.cart
      })

      my.setStorageSync({
        key: "totalSelected",
        data: app.globalData.totalSelected
      })

      this.toastHandler()
    },
    
    toastHandler() {
      this.setData({
        toastStatus: !this.data.toastStatus
      })
    }
  }
});