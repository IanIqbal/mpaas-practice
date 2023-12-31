Page({
    data: {
        textArry: [],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/ELiPtNKfHIGlpjOotpoC.jpg"
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
            ocrType: 'ocr_business_card',
            path: url,
            success: (res) => {
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                let {name, company, department, title, tel_cell, tel_work, addr, email}=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: 'full name', message: name },
                        { title: 'company', message: company },
                        { title: 'department', message: department },
                        { title: 'position', message: title },
                        { title: 'phone number', message: tel_cell },
                        { title: 'Telephone number', message: tel_work },
                        { title: 'address', message: addr },
                        { title: 'mailbox', message: email }

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
