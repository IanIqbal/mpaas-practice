Page({
    data: {
        textArry: [
            { title: 'signing and issuing organization', message: 'Exit Entry Administration of the Ministry of public security' },
            { title: 'birthday', message: '2020year12month27day' },
            { title: 'birthplace', message: 'Sichuan' },
            { title: 'nationality', message: 'CHN' },
            { title: 'Expiry date', message: '2044year04month08day' },
            { title: 'Date of issue', message: '2024year04month09day' },
            { title: 'Issuing address', message: 'Sichuan' },
            { title: 'Name in English', message: 'ZHIXIAOBAO' },
            { title: 'Name Chinese', message: 'Zhixiaobao' },
            { title: 'Passport number', message: 'E09222222' },
            { title: 'identityID', message: 'MCNONCNF<<<<A9' },
            { title: 'Gender', message: 'F' },
            { title: 'country', message: 'CHN' }
        ],
        imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JUcFsOCCRzlYpEHkKczj.jpg"
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
            ocrType: 'ocr_passport',
            path: url,
            success: (res) => {
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);

                let {authority, birth_date,  birth_place, country, expiry_date,  issue_date, issue_place, name, name_cn, passport_no, person_id, sex, src_country
                }=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: 'signing and issuing organization', message: authority },
                        { title: 'birthday', message: this.reData(birth_date) },
                        { title: 'birthplace', message: birth_place },
                        { title: 'nationality', message: country },
                        { title: 'Expiry date', message: this.reData(expiry_date) },
                        { title: 'Date of issue', message: this.reData(issue_date) },
                        { title: 'Issuing address', message: issue_place },
                        { title: 'Name in English', message: name },
                        { title: 'Name Chinese', message: name_cn },
                        { title: 'Passport number', message: passport_no },
                        { title: 'identityID', message: person_id },
                        { title: 'Gender', message: sex },
                        { title: 'country', message: src_country }
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
