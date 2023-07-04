const app = getApp()
Component({
  mixins: [],
  data: {},
  props: {
    item: {},
  },
  didMount() {},
  didUpdate(){
console.log("updated");
  },
  didUnmount() {},
  methods: {
    deleteItem(e) {
      let {id} = e.currentTarget.dataset
      let index = app.globalData.cart.findIndex(el => el.id == id)
      let newCart = [...this.$page.data.cart]
      let selectedItem = this.$page.data.cart[index]

      newCart.splice(index,1)

      this.$page.setData({
        cart: newCart
      })

      app.globalData.cart = newCart
      app.globalData.totalSelected -=  this.props.item.stockSelected

      this.$page.setData({totalPrice: this.$page.data.totalPrice - (selectedItem.stockSelected * selectedItem.finalPrice) })
      this.$page.setData({formattedTotalPrice: "Rp. " + new Intl.NumberFormat().format(this.$page.data.totalPrice)   })

      my.setStorageSync({key:"cart", data: newCart})
      my.setStorageSync({key:"totalSelected", data: app.globalData.totalSelected })
    },
    test() {
      console.log("test from test");
    },
    changeStock(e) {
      console.log("test");
      let {operation} = e.currentTarget.dataset
      let {id} = e.currentTarget.dataset
      let targetIndex = this.$page.data.cart.findIndex(el => el.id == id)
      let newCart = [...this.$page.data.cart]

      if(operation){
        newCart[targetIndex] = {...newCart[targetIndex], stockSelected: newCart[targetIndex].stockSelected+1}
        app.globalData.totalSelected++
      }else {
        newCart[targetIndex] = {...newCart[targetIndex], stockSelected: newCart[targetIndex].stockSelected-1}
        app.globalData.totalSelected--
      }

      this.$page.setData({cart: newCart })
      app.globalData.cart = newCart
      // app.globalData.cart.forEach(el => {
        
      //   if (el.id == id) {
      //     el.stockSelected = operation? el.stockSelected+1 : el.stockSelected-1
      //   }
        
      // })

      this.$page.setData({totalPrice: operation? this.$page.data.totalPrice + newCart[targetIndex].finalPrice : this.$page.data.totalPrice - newCart[targetIndex].finalPrice })
      this.$page.setData({formattedTotalPrice: "Rp. " + new Intl.NumberFormat().format(this.$page.data.totalPrice)   })

      my.setStorageSync({key:"cart", data: newCart})
      my.setStorageSync({key:"totalSelected", data: app.globalData.totalSelected })

      console.log(app.globalData.cart);
    }
  },
});