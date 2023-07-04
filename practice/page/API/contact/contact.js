Page({
  data:{
      "photoFilePath": "/sdcard/DCIM/Camera/a.jpg",
      "nickName": "July Liuhuo",
      "lastName": "Last",
      "middleName": "Middle",
      "firstName": "First",
      "remark": "Here are the notes",
      "mobilePhoneNumber": "13800000000",
      "homePhoneNumber": "11111115",
      "workPhoneNumber": "11111112",
      "homeFaxNumber": "11111114",
      "workFaxNumber": "11111111",
      "hostNumber": "11111113",
      "weChatNumber": "liuhuo",
      "alipayAccount": "alipay@alipay.com",
      "addressCountry": "US",
      "addressState": "California",
      "addressCity": "San Francisco",
      "addressStreet": "Mountain View",
      "addressPostalCode": "94016",
      "workAddressCountry": "China",
      "workAddressState": "Zhejiang",
      "workAddressCity": "Hangzhou",
      "workAddressStreet": "Tianmushan Road",
      "workAddressPostalCode": "361005",
      "homeAddressCountry": "Canada",
      "homeAddressState": "Ontairo",
      "homeAddressCity": "Toronto",
      "homeAddressStreet": "No.234 Road",
      "homeAddressPostalCode": "123456",
      "organization": "AntFin",
      "title": "Developer",
      "email": "liuhuo01@sina.com",
      "url": "www.alipay.com",
      success: (res) => {
        my.alert({
          content: 'addPhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'addPhoneContact response: ' + JSON.stringify(res)
        });
      }
  },
  choosePhoneContact() {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
    });
  },
  chooseAlipayContact() {
    my.chooseAlipayContact({
      count: 2,
      success: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
    });
  },
  chooseContact() {
    my.chooseContact({
      chooseType: 'multi', // Multiple selection mode
      includeMe: true,     // Include yourself
      includeMobileContactMode: 'known',//Contains only two-way phone contacts，That is, the contacts with the other party's number are stored in the mobile phone address books of both parties
      multiChooseMax: 3,  // You can select up to three contacts
      multiChooseMaxTips: 'Exceeded the maximum number of people selected',
      success: (res) => {
        my.alert({
          content: 'chooseContact : ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'chooseContact : ' + JSON.stringify(res)
        });
      },
    });
  },
  onInput(e) {
    this.data[e.currentTarget.id] = e.detail.value;
  },
  addPhoneContact() {
    if (my.canIUse('addPhoneContact')) {
      my.addPhoneContact(this.data);
    } else {
      my.alert({ 
        title: 'Client version too low',
        content: 'my.addPhoneContact() need 10.1.32 And above'
      });
    }
  }
});
