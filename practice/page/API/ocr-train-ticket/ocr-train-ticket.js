Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/bQcotnJacNoSYPeNfAjZ.jpg"
    },
    onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn(url){
        my.showLoading({
            content: 'Loading...',
            delay: 100,
        });
        my.ocr({
            ocrType: 'ocr_train_ticket',
            path: url,
            success: (res) => {
                let data = res.result;
                let {date, destination, origin, level, number, place, price}=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: 'Ride time', message: date },
                        { title: 'destination', message: destination },
                        { title: 'place of departure', message: origin },
                        { title: 'Model', message: level },
                        { title: 'Train number', message: number },
                        { title: 'seat', message: place },
                        { title: 'Ticket Price', message: price }
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
