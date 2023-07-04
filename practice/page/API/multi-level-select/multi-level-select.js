Page({
  openMultiLevelSelect() {
    my.multiLevelSelect({
        title: 'Multistage selector',//Cascade selection title
        list: [
        {
            name: "Hangzhou",//Item name
            subList: [
                {
                    name: "West Lake District",
                    subList: [
                        {
                            name: "GUCUI Street"
                        },
                        {
                            name: "Wenxin Street"
                        }
                    ]
                },
                {
                    name: "Shangcheng District",
                    subList: [
                        {
                            name: "Yan'an Street"
                        },
                        {
                            name: "Longxiangqiao Street"
                        }
                    ]
                }
            ]//Cascading sub data list
        }],//Cascading data list
        success:(res)=>{
            my.alert({title:JSON.stringify(res)})
        }
    });
  }
})
