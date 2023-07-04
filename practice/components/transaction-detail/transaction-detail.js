Component({
  mixins: [],
  data: {},
  props: {
    transaction:{}
  },
  didMount() {
    let updatedData = this.props.transaction.TransactionItems.map(el =>{
      let formattedPrice = "Rp. " + new Intl.NumberFormat().format(el.price) 
      let formattedTotalPrice = "Rp. " + new Intl.NumberFormat().format(el.totalPrice)
      let output = {...el, formattedPrice, formattedTotalPrice}
      return output
    })

    this.setData({transaction: {...this.props.transaction, TransactionItems: updatedData}})
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
