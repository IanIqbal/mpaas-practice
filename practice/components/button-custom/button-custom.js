Component({
  mixins: [],
  data: {},
  props: {
    disabled:false,
    parentData:null,
    onFunctionParent:function(){

    }
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    functionHandle(e){
      // console.log(e);
      console.log(this.props.onFunctionParent);
      this.props.onFunctionParent(e)
    }
  },
});
