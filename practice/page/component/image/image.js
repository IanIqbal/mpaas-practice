Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：Zoom picture without maintaining aspect ratio，Fit the picture completely',
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：Keep aspect ratio zoom picture，Make the long side of the picture fully visible',
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：Keep aspect ratio zoom picture，Only the short side of the picture can be fully displayed',
    }, {
      mode: 'widthFix',
      text: 'widthFix：Constant width，Automatic height change，Keep the aspect ratio of the original drawing unchanged',
    }, {
      mode: 'top',
      text: 'top：Do not scale picture，Show only the top area of the picture',
    }, {
      mode: 'bottom',
      text: 'bottom：Do not scale picture，Show only the bottom area of the picture',
    }, {
      mode: 'center',
      text: 'center：Do not scale picture，Show only the middle area of the picture',
    }, {
      mode: 'left',
      text: 'left：Do not scale picture，Show only the left area of the picture',
    }, {
      mode: 'right',
      text: 'right：Do not scale picture，Show only the right side of the picture',
    }, {
      mode: 'top left',
      text: 'top left：Do not scale picture，Show only the upper left area of the picture',
    }, {
      mode: 'top right',
      text: 'top right：Do not scale picture，Show only the upper right area of the picture',
    }, {
      mode: 'bottom left',
      text: 'bottom left：Do not scale picture，Show only the lower left area of the picture',
    }, {
      mode: 'bottom right',
      text: 'bottom right：Do not scale picture，Show only the lower right area of the picture',
    }],
    src: '/image/ant.png',
  },
  imageError(e) {
    console.log('image happen error event，Carry value is', e.detail.errMsg);
  },
  onTap(e) {
    console.log('image happen tap event', e);
  },
  imageLoad(e) {
    console.log('image Load successful', e);
  },
});
