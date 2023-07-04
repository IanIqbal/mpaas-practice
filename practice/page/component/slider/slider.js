const pageData = {};

for (let i = 1; i < 5; ++i) {
  (function (index) {
    pageData['slider' + index + 'change'] = function (e) {
      console.log('slider' + index + 'happenchangeevent，Carry value is', e.detail.value);
    };
  })(i);
}
Page(pageData);
