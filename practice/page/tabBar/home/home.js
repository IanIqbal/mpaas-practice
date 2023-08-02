const app = getApp()

Page({
  data: {
    username: "",
    saldo: 0,
    formattedSaldo: "",
    rekening: 0,
    menus: [{
        name: "Transfer",
        logo: "SendOutline",
        url: "https://www.bni.co.id/id-id/e-banking/bni-atm"
      },
      {
        name: "E-Wallet",
        logo: "BankcardOutline",
        url: "https://bni.co.id/en-us/e-banking/tapcash"
      },
      {
        name: "Pembayaran",
        logo: "HandPayCircleOutline",
        url: "https://bni.co.id/en-us/e-banking/bni-smartpay"
      },
      {
        name: "Pembelian",
        logo: "ShopbagOutline"
      },
      {
        name: "Investasi",
        logo: "HistogramOutline"
      },
      {
        name: "Life Goals",
        logo: "CompassOutline",
        url: "https://bni.co.id/en-us/personal/simulation/bni-tapenas-life-goals"
      },
      {
        name: "Digital Loan",
        logo: "ReceivePaymentOutline",
        url: "https://bni.co.id/en-us/personal/loans"
      },
      {
        name: "Credit Card",
        logo: "BillOutline",
        url: "https://www.bni.co.id/creditcard/en-us/"
      },
      {
        name: "Rekeningku",
        logo: "ContentOutline",
        url: "https://bni.co.id/en-us/personal/savings/tabunganku"
      },
      {
        name: "Mobile Tunai",
        logo: "GlobalOutline",
        url: "http://127.0.0.1:8081/"
        // url:"https://bni.co.id/en-us/e-banking/bni-mobile-banking"
      },
      {
        name: "DiKado",
        logo: "GiftOutline",
        // url: "http://127.0.0.1:5021"
        url: "http://127.0.0.1:2002"

      },
      {
        name: "MenuLengkap",
        logo: "AppstoreOutline",
        url: "https://bni.co.id/en-us/"
      }
    ],
    banners: [{
        name: "banner 1",
        banner: "/image/bni-banner1.jpg"
      },
      {
        name: "banner 1",
        banner: "/image/bni-banner2.jpg"
      }

    ]
  },
  onLoad() {
    my.vibrate({
      success: () => {
        console.log("vibrated");
      }
    })

    my.getSystemInfo({
      success: (res) => {
       console.log(res);
      }
    })

  },
  toMiniApp(e) {
    let {
      page
    } = e.currentTarget.dataset


    switch (page) {
      case "Pembelian":

        my.navigateTo({
          url: "/page/products/products"
        })
        break;

      case "Investasi":
        my.navigateTo({
          url: "/page/trading-page/trading-page"
        })
        break;

      default:
        my.navigateTo({
          url: "/page/webview-menu/webview-menu?page=" + page
        })
        break;
    }

  },

  onShow() {
    this.getUserData()

    let token = my.getStorageSync({
      key: "accessToken"
    })

    if (!token.data) {

      my.navigateTo({
        url: "/page/login/login"
      })

    }

  },

  getUserData() {

    app.refreshAccessToken()
      .then((result) => app.getUserData())
      .then((data) => {

        if (!data.isAgree) {
          //THIS IS TO PREVENT THE USER FOR ENTERING HOME PAGE WITHOUT AGREED ON THE TERMS OF CONDITIONS(TOC) BY REFRESHING ON TOC PAGE
          my.navigateTo({
            url: "/page/login/login"
          })
        } else {

          this.setData({
            username: data.username.toUpperCase(),
            saldo: data.saldo,
            rekening: data.rekening,
            formattedSaldo: "Rp. " + new Intl.NumberFormat().format(data.saldo)

          })

        }
      })
      .catch((error) => {
        app.logOut()
      })

  }
});