Page({
  openOne() {
    my.optionsSelect({
      title: "Repayment date selection",
      optionsOne: ["Every Monday", "Every Tuesday", "Every Wednesday", "Every Thursday", "Every Friday", "Every Saturday", "Every Sunday"],
      selectedOneIndex: 2,
      success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2),
        });
      }
    });
  },
  openTwo() {
    my.optionsSelect({
      title: "Date of birth selection",
      optionsOne: ["2014year", "2013year", "2012year", "2011year", "2010year", "2009year", "2008year"],
      optionsTwo: ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', '十January', '十February'],
      selectedOneIndex: 3,
      selectedTwoIndex: 5,
      success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2),
        });
      }
    });
  },
});
