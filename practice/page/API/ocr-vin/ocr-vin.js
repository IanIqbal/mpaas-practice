Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/GPbtvSnPedYahofahAKX.jpg"
    },
    onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn(url){
        my.ocr({
            ocrType: 'ocr_vin',
            path: url,
            success: (res) => {
                let data = res.result.vin;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: 'Frame No', message: data },
                    ],
                });
                my.hideLoading();
            },
            fail: (res) => {
                my.hideLoading();
                my.alert({
                    title:'fail',
                    content:JSON.stringify(res),
                });
            },

        });
    },
    photoSubmit() {//Click upload
        my.chooseImage({
            count: 1,
            success: (res) => {
                this.callFn(res.apFilePaths[0]);
            },
        });
    },
    imageLoad(e){

    },
    imageError(e){

    }
});
