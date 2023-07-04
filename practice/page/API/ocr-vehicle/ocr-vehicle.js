Page({
    data: {
        textArry: [
            { title: 'license plate', message: 'ZhejiangBC9188' },
            { title: 'Vehicle type', message: 'Small car' },
            { title: 'all',   message: 'Zhixiaobao' },
            { title: 'address', message: 'Yuanding street, Jiangdong District, Ningbo City, Zhejiang Province88get' },
            { title: 'Nature of use', message: 'Lease to non' },
            { title: 'Brand and model', message: 'SantanaSVW7180LE1' },
            { title: 'Identification code', message: 'LSVAU033661234567' },
            { title: 'Engine number', message: '0009827' },
            { title: 'Date of registration', message: '2006year07month21day' },
            { title: 'Date of issue', message: '2013year07month08day' },
        ],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/xyWhFGfKPgIlwMtztXnf.jpg"
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
            ocrType: 'ocr_vehicle',
            path: url,
            success: (res) => {
                console.log('res', res);
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                let {plate_num, addr, vehicle_type, owner, use_character, model, vin, engine_num, register_date, issue_date}=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: 'license plate', message: plate_num },
                        { title: 'Vehicle type', message: vehicle_type },
                        { title: 'all',   message: owner },
                        { title: 'address', message: addr },
                        { title: 'Nature of use', message: use_character },
                        { title: 'Brand and model', message: model },
                        { title: 'Identification code', message: vin },
                        { title: 'Engine number', message: engine_num },
                        { title: 'Date of registration', message: this.reData(register_date) },
                        { title: 'Date of issue', message: this.reData(issue_date) },
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
    reData(data) {
        return data.substring(0,4)+'year'+data.substring(4,6)+'month'+data.substring(6,8)+'day'
    },
    imageLoad(e){

    },
    imageError(e){

    }
});
