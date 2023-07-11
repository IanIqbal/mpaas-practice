const app = getApp()
Component({
  mixins: [],
  data: {},
  props: {
    item: {},
  },
  didMount() {},
  didUpdate(){
  },
  didUnmount() {},
  methods: {
    deleteItem(e) {
      let {id} = e.currentTarget.dataset
      let index = app.globalData.cart.findIndex(el => el.id == id)
      let newCart = [...this.$page.data.cart]
      let selectedItem = this.$page.data.cart[index]

      newCart.splice(index,1)

      // this.$page IS THE SYNTAX FOR ACCESSING/CHANGING ANY STATE OR FUNCTION ON PARENT PAGE FROM CHILDREN COMPONENT
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

    changeStock(e) {

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

      this.$page.setData({
        cart: newCart ,
        totalPrice: operation? this.$page.data.totalPrice + newCart[targetIndex].finalPrice : this.$page.data.totalPrice - newCart[targetIndex].finalPrice,
      })
      
      this.$page.setData({
        formattedTotalPrice: "Rp. " + new Intl.NumberFormat().format(this.$page.data.totalPrice)
      })
      
      app.globalData.cart = newCart
   
      my.setStorageSync({key:"cart", data: newCart})
      my.setStorageSync({key:"totalSelected", data: app.globalData.totalSelected })

    }
  },
});