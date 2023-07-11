Component({
  mixins: [],
  data: {},
  props: {
    transaction:{}
  },
  didMount() {
    let updatedData = this.props.transaction.TransactionItems.map(el =>{

      return {...el, 
      formattedPrice: "Rp. " + new Intl.NumberFormat().format(el.price) , 
      formattedTotalPrice: "Rp. " + new Intl.NumberFormat().format(el.totalPrice),
      }
      
    })

    this.setData({transaction: {...this.props.transaction, TransactionItems: updatedData}})
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
