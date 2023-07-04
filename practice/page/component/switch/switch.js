Page({
  data: {
    switch1: true,
  },
  switch1Change(e) {
    console.log('switch1 happen change event，Carry value is', e.detail.value);
    this.setData({
      switch1: e.detail.value,
    });
  },
  switch2Change(e){
    console.log('switch2 happen change event，Carry value is', e.detail.value);
  },
});
