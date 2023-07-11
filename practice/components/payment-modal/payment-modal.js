const app = getApp()
Component({
  mixins: [],
  data: {
    paymentMethods: [{
        value: 'saldo',
        label: 'Saldo',
        checked: true
      }, {
        value: 'virtual account',
        label: 'Virtual Account',
        checked: false,
        disabled: true
      },
      {
        value: 'credit card',
        label: 'Credit Card',
        checked: false,
        disabled: true
      }, {
        value: 'go pay',
        label: 'Go Pay',
        checked: false,
        disabled: true
      }

    ],
    formattedSaldo: 0,
    sisaSaldo: 0,
    saldo: 0,
    formattedSisaSaldo: 0,
    formattedTotalPrice: 0,
    confirmVisibility: false,
    payMethod:"",
    insufficient: false
  },
  props: {
    totalPrice: 0
  },

  didMount() {
   this.getUserData()
  },

  didUpdate(prevProps,prevData) {

    this.setData({
      formattedTotalPrice: "Rp. " + new Intl.NumberFormat().format(this.props.totalPrice),
      sisaSaldo: this.data.saldo - this.props.totalPrice,
      formattedSisaSaldo: "Rp. " + new Intl.NumberFormat().format(this.data.saldo - this.props.totalPrice)
    })
  
    this.setData({insufficient:this.data.sisaSaldo > 0? false : true })


   
  },

  didUnmount() {},
  
  methods: {
    submitHandler(e) {
     this.setData({payMethod: e.detail.value.payMethod})
     this.handleConfirmModal()
    },

    handleConfirmModal() {
      this.setData({
        confirmVisibility: !this.data.confirmVisibility
      })
    },

    payHandler(e){

      app.refreshAccessToken()
      .then((result)=>{
        
        my.httpRequest({
          url:  app.globalData.address +  '/transactions',
          headers: {
            access_token: my.getStorageSync({key:"accessToken"}).data, 
          'content-type': 'application/json',  
          'ngrok-skip-browser-warning': 'true',

        },
          method: 'post',
          data: {
            cart:app.globalData.cart,
            totalPrice:this.props.totalPrice,
            payMethod: this.data.payMethod,
            totalItem:app.globalData.totalSelected
          },
          timeout: 30000,
          dataType: "json",
          success: (result) => {
            my.switchTab({url:"/page/tabBar/transaction/transaction"})
            app.globalData.cart = []
            app.globalData.totalSelected = 0

            my.setStorageSync({key:"cart", data:[]})
            my.setStorageSync({key:"totalSelected", data:0})
          },
          fail: (error) => {
            console.log(error);
          },
          complete: () => {
            this.handleConfirmModal()
            
          }
        });
      })
      .catch((error)=>{
        app.logOut()
      })
    },

    getUserData(){

      app.refreshAccessToken()
      .then((result) =>  app.getUserData())
      .then((data)=>{
        this.setData({
          formattedSaldo: "Rp. " + new Intl.NumberFormat().format(data.saldo),
          formattedTotalPrice: "Rp. " + new Intl.NumberFormat().format(this.props.totalPrice),
          sisaSaldo: data.saldo - this.props.totalPrice,
          formattedSisaSaldo: "Rp. " + new Intl.NumberFormat().format(data.saldo - this.props.totalPrice),
          saldo: data.saldo,
        })
        
        this.setData({
          insufficient:this.data.sisaSaldo > 0 ? false : true
         })

      })
      .catch((error)=>{
        app.logOut()
      })
    }
  },
});