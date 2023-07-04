Page({
  data: {
    activeTab: 2,
    tabs: [
      { title: 'Option 2', anchor: 'a', number: '6' },
      { title: 'option', anchor: 'b', number: '66' },
      { title: 'No more than five characters', anchor: 'c', number: '99+' },
      { title: 'Option four option four option four option four', anchor: 'd' },
      { title: 'Option 5', anchor: 'e' },
      { title: 'Option 6', anchor: 'f' },
    ],
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
    this.setData({
      activeTab: index,
    });
  },
});
