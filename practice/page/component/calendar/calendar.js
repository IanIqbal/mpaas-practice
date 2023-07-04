Page({
  data: {
    tagData: [
      { date: '2020-02-14', tag: 'colour 1', tagColor: 1 },
      { date: '2020-02-28', tag: 'accumulation fund', tagColor: 2 },
      { date: '2020-02-24', tag: 'colour 3', tagColor: 3 },
      { date: '2020-02-18', tag: 'colour 4', tagColor: 4 },
      { date: '2020-02-4', tag: 'Mortgage repayment', tagColor: 5 },
      { date: '2020-02-10', tag: 'accumulation fund', disable: true },
    ],
  },
  onLoad() {
    const getDate = new Date();
    const getYear = getDate.getFullYear();
    const getMonth = getDate.getMonth();
    let m = getMonth + 1;
    if (m.toString().length === 1) {
      m = '0' + m;
    }
    this.setData({
      tagData: [
        { date: getYear + '-' + m + '-14', tag: 'colour 1', tagColor: 1 },
        { date: getYear + '-' + m + '-28', tag: 'accumulation fund', tagColor: 2 },
        { date: getYear + '-' + m + '-24', tag: 'colour 3', tagColor: 3 },
        { date: getYear + '-' + m + '-18', tag: 'colour 4', tagColor: 4 },
        { date: getYear + '-' + m + '-4', tag: 'Mortgage repayment', tagColor: 5 },
        { date: getYear + '-' + m + '-10', tag: 'accumulation fund', disable: true },
      ],
    });
  },
  handleSelect() {},
  onMonthChange() {},
  onYearChange() {},
  onSelectHasDisableDate() {
    my.alert({
      content: 'SelectHasDisableDate',
    });
  },
});
