const app = getApp()

Page({
  data:{
    username:"",
    transactionalList:[
      {image:"BankcardOutline", info:"Atur Kartu Debit" },
      {image:"BankcardOutline", info:"Kartu Kredit Pemerintah Domestik" },
      {image:"TextOutline", info:"Bukti Transaksi" },
      {image:"PayCircleOutline", info:"Aktivasi Transaksi Kartu di Luar Negeri" },
      {image:"AppOutline", info:"Pengaturan BI Fast" },
      {image:"LockOutline", info:"Blokir Saldo" },
      {image:"BellOutline", info:"Aktifasi SMS Notifikasi" },
    ],
    pengamananList:[
      {image:"UserContactOutline", info:"Ubah MPIN" },
      {image:"ExclamationShieldOutline", info:"Password Transaksi" },
      {image:"FaceRecognitionOutline", info:"Login Biometrik" },
    ],
    lainnyaList:[
      {image:"TeamOutline", info:"Referral" },
    ]
  },
  onLoad(){
  },
  onShow(){
    this.setData({username:app.globalData.username.toUpperCase()})
   
    let token = my.getStorageSync({key:"accessToken"})
    if(!token.data){
      my.navigateTo({url:"/page/login/login"})
    }
  },

  logOut(){
    my.clearStorageSync();
    my.navigateTo({url:"/page/login/login"})
    console.log("Log out success");
  }
})