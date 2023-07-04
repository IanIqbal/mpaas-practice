Page({
  data: {
    longitude: '120.126293',
    latitude: '30.274653',
    name: 'Huanglong Vanke Center',
    address: 'Xueyuan Road77number',
  },

  openLocation() {
    my.openLocation({
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      name: this.data.name,
      address: this.data.address,
    })
  }
})
