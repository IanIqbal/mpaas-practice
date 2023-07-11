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
  
    this.setData({
      formattedDate:  new Date(this.props.transaction.createdAt).toLocaleString("id", {day:"numeric",month:"long", year:"numeric"}) ,
      formattedPrice: "Rp. " + new Intl.NumberFormat().format(this.props.transaction.totalPrice),
      formattedStatus: this.props.transaction.status.toUpperCase() 
   })

  },
  didUpdate() {},
  didUnmount() {},
  methods: {

    modalHandler(){
      this.setData({modalStatus: !this.data.modalStatus})
    }
  },
});
