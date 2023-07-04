Page({
  data: {},
  onLoad() {},

  // 检查是否收藏
  isCollected() {
    if (my.canIUse('isCollected')) {
      my.isFaisCollectedvorite({
        success:(res) => {
          my.showToast({ 
            title: 'Query results',
            content: JSON.stringify(res)
          });
        },
        fail:(error)=>{
          my.showToast({content: 'fail'+JSON.stringify(error) });
        },
      });
    } else {
      my.alert({
        title: 'Version too low',
        content: 'my.isCollected() client10.1.65Start support'
      });
    }
  }
  });
