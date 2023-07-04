Component({
  mixins: [],
  data: {
    formattedDate:"",
    formattedPrice:"",
    formattedStatus:"",
    modalStatus:false
  },
  props: {
    transaction:{}
},
  didMount() {
    let year = new Date(this.props.transaction.createdAt).getFullYear()
    let month = new Date(this.props.transaction.createdAt).getMonth()
    let date = new Date(this.props.transaction.createdAt).getDate()

    this.setData({formattedDate:  new Date(this.props.transaction.createdAt).toLocaleString("id", {day:"numeric",month:"long", year:"numeric"})  })
    this.setData({formattedPrice: "Rp. " + new Intl.NumberFormat().format(this.props.transaction.totalPrice)})
    this.setData({formattedStatus: this.props.transaction.status.toUpperCase() })
  },
  didUpdate() {
   
  },
  didUnmount() {},
  methods: {

    modalHandler(){
      this.setData({modalStatus: !this.data.modalStatus})
    }
  },
});
