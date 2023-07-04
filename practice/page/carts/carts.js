const app = getApp()
Page({
  data: {
    cart: [],
    totalPrice: 0,
    formattedTotalPrice:"",
    modalStatus:false
  },
  onLoad() {
    this.setData({
      cart: app.globalData.cart
    })
    console.log(this.data.cart);
  },

  onShow() {

    this.data.cart.forEach(el => {
      this.setData({
        totalPrice: el.finalPrice ? this.data.totalPrice + (el.finalPrice * el.stockSelected ) : this.data.totalPrice + (el.price * el.stockSelected )
      })
    })

    this.setData({formattedTotalPrice: "Rp. " + new Intl.NumberFormat().format(this.data.totalPrice)   })
  },
  modalHandle(){
    console.log("test");
    this.setData({modalStatus: !this.data.modalStatus})
  }
});