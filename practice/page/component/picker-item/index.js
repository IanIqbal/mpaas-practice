const banks = ['BankA', 'BankB', 'BankC', 'BankD'];

Page({
  data: {
    bank: '',
  },
  onPickerTap() {
    my.showActionSheet({
      title: 'Choose Issue Bank',
      items: banks,
      success: (res) => {
        this.setData({
          bank: banks[res.index],
        });
      },
    });
  },
});
