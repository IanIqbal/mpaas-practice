Page({
  data: {
    tempFilePath: '',
    savedFilePath: '',
  },
  onLoad() {
    my.getStorage({
      key: 'savedFilePath', // Cached data key
      success: (res) => {
        this.setData({
          savedFilePath: res.data ? res.data : '',
        });
      },
    });
  },
  chooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log('chooseImage', res);
        this.setData({
          tempFilePath: res.apFilePaths[0],
        });
      },
    });
  },
  saveFile() {
    if (this.data.tempFilePath.length > 0) {
      const that = this;
      my.saveFile({
        apFilePath: this.data.tempFilePath,
        success(res) {
          console.log('saveFile', res);
          that.setData({
            savedFilePath: res.apFilePath,
          });
          my.setStorage({ key: 'savedFilePath', data: res.apFilePath });
          my.alert({
            title: 'Saved successfully', // alert Title of the box
            content: `The next time you enter the app，This file is still available:${JSON.stringify(res)}`,
          });
        },
      });
    }
  },
  getFileInfo() {
    my.getFileInfo({
      apFilePath:this.data.tempFilePath,
      digestAlgorithm:'sha1',
      success:(res)=>{
        my.alert({
          title: 'file information',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res))
      }
    })
  },
  getSavedFileInfo() {
    my.getSavedFileInfo({
      apFilePath: this.data.savedFilePath,
      success: (res) => {
        my.alert({
          title: 'file information',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res))
      }
    })
  },
  getSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        my.alert({
          title: 'Saved file list',
          content: JSON.stringify(res),
        });
        console.log(JSON.stringify(res))
      }
    });
  },

  removeSavedFile() {
    my.getSavedFileList({
      success: (res) => {
        my.removeSavedFile({
          apFilePath: res.fileList[0].apFilePath,
          success: (res) => {
            my.alert({
              title: 'File removed successfully',
              content: JSON.stringify(res),
            });
            console.log('remove success')
          }
        })
      }
    });
  },
 openDocument() {
     my.showLoading({
      content: 'File downloading...',
      delay: '0',
    });
    //首先download file
    my.downloadFile({
      url: 'https://gw.alipayobjects.com/os/basement_prod/1ce3efc7-a8e0-4111-83e5-4cc8de73170e.pdf',
      success({ apFilePath }) {
    if (my.canIUse('openDocument')) {
      my.hideLoading();
        my.openDocument({
          filePath: apFilePath,
          fileType: 'pdf',
          success: (res) => {
            console.log('open document success')
            }
          })
    } else {
      my.alert({ 
        title: 'Client version too low',
        content: 'my.openDocument() need 10.1.50 And above'
      });
    }  
  }
  });
  },
  clear() {
    my.setStorage({ key: 'savedFilePath', data: '' })
    this.setData({
      tempFilePath: '',
      savedFilePath: '',
    });
  },
});
