Page({
  data: {},
  onLoad() {},

//-----------卡/券/票 列表页JSAPI:   只有success  fail等回调入参
openCardList(){
    my.openCardList({
      success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(res)=>{
        my.alert({content: 'completeCallback！',});
      }
    });
},

openVoucherList(){
    my.openVoucherList({
      success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
    });
},

openTicketList(){
    my.openTicketList({
      success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
   });
},

//---------卡/券/票 详情页JSAPI:   passId 或者 partnerId + serialNumber  二选一的入参
openCardDetail(){
    my.openCardDetail({//card   I won't support itpartnerIdmode
      passId:'12339004637',
      success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(res)=>{
        my.showToast({content: 'completeCallback！',});
      }
    }); 
},
openVoucherDetail(){
    my.openVoucherDetail({
     passId:'15153594937',//
       //partnerId:'2088521411242352',
      // serialNumber:'20170904000730023708007XVP2W',
      //开发环境
      //passId:"7001350165",
      // partnerId:'2088302084359231',
      // serialNumber:'2017060218522661677653862',
      success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
    }); 
},

openTicketDetail(){
  my.openTicketDetail({
      passId:"11688279837",
      //partnerId:'2013080800000754',
      //serialNumber:'T150P4607471458101261',
      //passId:"7001020065",
      //partnerId:'2088101162864452',
      //serialNumber:'2017033120573899567387727',
      success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
    });
},

//打开口碑券详情
openKBVoucherDetail(){
    my.openKBVoucherDetail({
       passId:'13813142037',
       //partnerId:'2088912612862076',
       //serialNumber:'201708010007300237080079G88A',

      // passId:'7001430265',
      // partnerId:'2088102147297014',
      // serialNumber:'201708250007300265750000AWST',
      success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
    });
},
//口碑客劵详情页
  gotoDetail() {
      my.navigateToCouponDetail({
          itemId: '2017072010076000000015900884',
          chInfo: 'ch_cainiao__spmid_a13.b579',
          success: (res) => {
            my.alert({
              title: 'success',
              content: JSON.stringify(res),
            });
          },
          fail: (res) => {
            my.alert({
              title: 'fail',
              content: JSON.stringify(res),
            });
          },
          complete:(res)=>{
        my.showToast({content: 'completeCallback！',});
      }
      });
    }, 


//--------------------卡/券/票 单商户列表页:    partnerId  入参
openMerchantCardList(){
    my.openMerchantCardList({
     partnerId:'2088621202286735',
     success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
   });
},

openMerchantVoucherList(){
    my.openMerchantVoucherList({
       partnerId:'2088521411242352',
     success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
   });
},

openMerchantTicketList(){
    my.openMerchantTicketList({
      partnerId:'2013080800000754',
     success:(res)=>{
        my.showToast({content: 'Call successful：'+JSON.stringify(res), });
      },
      fail:(error)=>{
        my.alert({content: 'Call failed：'+JSON.stringify(error), });
      },
      complete:(e)=>{
        my.showToast({content: 'completeCallback！',});
      }
   });

},
})
