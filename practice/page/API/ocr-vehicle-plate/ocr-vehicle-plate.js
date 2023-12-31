Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/uvBjLdgIbHlADgSmobOU.jpg"
    },
    onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn(url){
        my.ocr({
            ocrType: 'ocr_vehicle_plate',
            path: url,
            success: (res) => {
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: 'license plate number', message: data.plates[0].txt },

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
