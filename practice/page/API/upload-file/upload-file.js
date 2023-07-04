Page({
  uploadFile() {
    my.chooseImage({
      chooseImage: 1,
      success: res => {
        const path = res.apFilePaths[0];
        console.log(path);
        my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: res => {
            my.alert({ title: 'Upload successful' });
          },
          fail: function(res) {
            my.alert({ title: 'Upload failed' });
          },
        });
      },
    });
  },
});
