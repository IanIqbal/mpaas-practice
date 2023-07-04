Page({
  data: {
    modalOpened: false,
    modalOpened2: false,
    modalOpened21: false,
    modalOpened22: false,
    modalOpened222: false,
    modalOpened23: false,
    modalOpened3: false,
    modalOpened4: false,
    modalOpened5: false,
    modalOpened6: false,
    buttons5: [
      { text: 'cancel' },
      { text: 'Main operation', extClass: 'buttonBold' },
    ],
    buttons6: [
      { text: 'Main operation', extClass: 'buttonBold' },
      { text: 'cancel' },
    ],
    buttons7: [
      { text: 'cancel', extClass: 'cancelBtn' },
      { text: 'delete', extClass: 'deleteBtn' },
    ],
    buttons8: [
      { text: 'Main operation', extClass: 'buttonBold' },
      { text: 'more' },
      { text: 'cancel' },
    ],
  },
  /* currencymodal */
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  },
  /* Pop up window with picture-Large picture */
  openModal2() {
    this.setData({
      modalOpened2: true,
    });
  },
  onModalClick2() {
    this.setData({
      modalOpened2: false,
    });
  },
  onModalClose2() {
    this.setData({
      modalOpened2: false,
    });
  },
  /* Pop up window with picture */
  openModal21() {
    this.setData({
      modalOpened21: true,
    });
  },
  onModalClick21() {
    this.setData({
      modalOpened21: false,
    });
  },
  onModalClose21() {
    this.setData({
      modalOpened21: false,
    });
  },
  /* Pop up window with picture-Small graph */
  openModal22() {
    this.setData({
      modalOpened22: true,
    });
  },
  onModalClick22() {
    this.setData({
      modalOpened22: false,
    });
  },
  onModalClose22() {
    this.setData({
      modalOpened22: false,
    });
  },
  /* Pop up window with picture-Middle figure */
  openModal222() {
    this.setData({
      modalOpened222: true,
    });
  },
  onModalClick222() {
    this.setData({
      modalOpened222: false,
    });
  },
  onModalClose222() {
    this.setData({
      modalOpened222: false,
    });
  },
  /* Pop up frame with picture-closeicon */
  openModal23() {
    this.setData({
      modalOpened23: true,
    });
  },
  onModalClick23() {
    this.setData({
      modalOpened23: false,
    });
  },
  onModalClose23() {
    this.setData({
      modalOpened23: false,
    });
  },
  /* Operation activity pop-up-large */
  openModal3() {
    this.setData({
      modalOpened3: true,
    });
  },
  onModalClick3() {
    this.setData({
      modalOpened3: false,
    });
  },
  /* Operation activity pop-up-Small */
  openModal4() {
    this.setData({
      modalOpened4: true,
    });
  },
  onModalClick4() {
    this.setData({
      modalOpened4: false,
    });
  },
  /* Double button Popup */
  openModal5() {
    this.setData({
      modalOpened5: true,
    });
  },
  onButtonClick5(e) {
    const { target: { dataset } } = e;
    this.setData({
      modalOpened5: false,
    });
    my.alert({
      title: `Clicked：${JSON.stringify(dataset)}`,
      buttonText: 'close',
    });
  },
  /* Double button Popup-Vertical row */
  openModal6() {
    this.setData({
      modalOpened6: true,
    });
  },
  onButtonClick6(e) {
    const { target: { dataset } } = e;
    this.setData({
      modalOpened6: false,
    });
    my.alert({
      title: `Clicked：${JSON.stringify(dataset)}`,
      buttonText: 'close',
    });
  },
  /* Popup custom button style */
  openModal7() {
    this.setData({
      modalOpened7: true,
    });
  },
  onModalClose7() {
    this.setData({
      modalOpened7: false,
    });
  },
  onButtonClick7(e) {
    const { target: { dataset } } = e;
    this.setData({
      modalOpened7: false,
    });
    my.alert({
      title: `Clicked：${JSON.stringify(dataset)}`,
      buttonText: 'close',
    });
  },
  /* Three button pop-up */
  openModal8() {
    this.setData({
      modalOpened8: true,
    });
  },
  onButtonClick8(e) {
    const { target: { dataset } } = e;
    this.setData({
      modalOpened8: false,
    });
    my.alert({
      title: `Clicked：${JSON.stringify(dataset)}`,
      buttonText: 'close',
    });
  },
  /* Customize the contents of the pop-up box */
  openModal9() {
    this.setData({
      modalOpened9: true,
    });
  },
  onModalClose9() {
    this.setData({
      modalOpened9: false,
    });
  },
});
