Page({
  onLoad() {
    this.callback = (res) => {
        var levelString = 'iOS equipment, nothing level afferent.';
        switch (res.level) {
          case 10:
            levelString = 'Android equipment, level = TRIM_MEMORY_RUNNING_LOW';
            break;
          case 15:
            levelString = 'Android equipment, level = TRIM_MEMORY_RUNNING_CRITICAL';
            break;
        }
        my.alert({
          title: 'Insufficient memory alarm received',
          content: levelString
        });
    };
    this.isApiAvailable = my.canIUse('onMemoryWarning');
  },
  onMemoryWarning() {
    if (this.isApiAvailable) {
      my.onMemoryWarning(this.callback);
    } else {
      my.alert({
        title: 'Client version too low',
        content: 'my.onMemoryWarning() and my.offMemoryWarning() need 10.1.35 And above'
      });
    }
  },
  onUnload() {
    if (this.isApiAvailable) {
      my.offMemoryWarning(this.callback); 
    }
  }
});
