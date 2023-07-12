const app = getApp()
const {
  Chart,
  ScrollBar,
  ScrollBarParams
} = require("@antv/f2");

Page({
  data: {
    company: {},
    displayChart: false,
    timeType: [{
        value: "Past 100 Days"
      },
      {
        value: "Past Week"
      },
      {
        value: "Past Month"
      },
      {
        value: "Past 3 Month"
      },

    ],
    currentTime: "Past 100 Days",
    chartConfig: {},
    chart: {},
    f2: {},
    currentType:"line",
    zoom:100,
    targetZoom:1

  },
  onLoad(query) {
  
    // if (!my.getStorageSync({
    //     key: "company"
    //   }).data || my.getStorageSync({
    //     key: "symbol"
    //   }).data != query.symbol) {
    //   console.log("storage empty");
    //   this.getCompanyDetail(query.symbol)
    // } else {
    //   console.log("company found");
    //   this.setData({
    //     company: my.getStorageSync({
    //       key: "company"
    //     }).data
    //   })
    //   this.setData({
    //     displayChart: true
    //   })
    //   console.log(this.data.company);
    // }

      this.getCompanyDetail(query.symbol)

    // if (query.currentTime) {
    //   this.setData({
    //     currentTime: query.currentTime
    //   })
    // }
  },

  onPullDownRefresh() {

  },
  getCompanyDetail(symbol) {

    app.refreshAccessToken()
      .then((result) => {

        my.showLoading({
          content: "Loading"
        });
        my.request({
          url:  app.globalData.address + `/companies/${symbol}`,
          method: "get",
          headers: {
            access_token: my.getStorageSync({
              key: "accessToken"
            }).data,
          'ngrok-skip-browser-warning': 'true',

          },
          success: (data) => {
            this.setData({
              company: data.data
            })
            // my.setStorageSync({
            //   key: "company",
            //   data: data.data
            // })
            // my.setStorageSync({
            //   key: "symbol",
            //   data: data.data.metaData.symbol
            // })


          },
          fail: (err) => {
            console.log(err);
          },
          complete: (result) => {
            console.log(this.data.company);
            this.setData({
              displayChart: true
            })
            my.hideLoading();
          }
        })

      })
      .catch((error) => {
        my.hideLoading();
        app.logOut()
      })
  },

  initChart(f2, config) {
    // const chart = new f2.Chart(config)
    // let chart = this.chart? this.chart.clear() : new f2.Chart(config)
    if(this.chart){
      this.chart.clear()
      console.log("clear<<<<<<<<<<<<<");
    }
    
    if(!this.chart){
      this.chart = new f2.Chart(config)
      console.log("<<<<<<<<start");
    }
 
   
    this.setData({
      chartConfig: config,
      f2: f2
    })

    let max = Number.MIN_VALUE
    let openMax = Number.MIN_VALUE
    let closeMin = Number.MAX_VALUE
    let closeMax = Number.MIN_VALUE
    let highMax = Number.MIN_VALUE
    let lowMin = Number.MAX_VALUE

    let source

    switch (this.data.currentTime) {
      case "Past 100 Days":
        source = this.data.company.detailData
        break;

      case "Past 3 Month":
        source = this.data.company.detailThreeMonth
        break;

      case "Past Month":
        source = this.data.company.detailMonth
        break;

      case "Past Week":
        source = this.data.company.detailWeek
        break;
      default:
        break;
    }

    source.forEach(el => {
      if (el["open"] > openMax) {
        openMax = el["open"]
      }

      if (el["close"] > closeMax) {
        closeMax = el["close"]
      }

      if (el["close"] < closeMin) {
        closeMin = el["close"]
      }
      if (el["adjusted"] > max) {
        max = el["adjusted"]
      }

      if (el["high"] > highMax) {
        highMax = el["high"]
      }

      if (el["low"] < lowMin) {
        lowMin = el["low"]
      }
    })

    this.chart.source(source, {
      // hlInterval:{
      //   min: lowMin,
      //   max:highMax
      // },
      // ocInterval: {
      //   min: closeMin,
      //   max: openMax
      // },
      candleInterval: {
        max: max
      },
      time: {
        range: [0, 1],
        type: "timeCat",
        mask: "MM-DD",
        tickCount: this.data.company.detailData.length / 10,
        scrollBar: {
          mode: 'x',
          range: [0.1, 0.3],
          xStyle: {
            // Specify the style properties for the x-axis scroll bar
            // Example: backgroundColor, width, height, etc.
          },
          yStyle: {

            // Specify the style properties for the y-axis scroll bar
            // Example: backgroundColor, width, height, etc.
          },
        },
      },
      adjusted: {
        max: max
      },
      close:{
        max:closeMax,
        color:"red",
        style:{
          grid:{
            color:"red"
          }
        }
      }
    })

    let status = source[0].adjusted > source[source.length - 1].adjusted
    let color = status ? "green" : "red"
    let currentType = this.data.currentType
    if(this.data.currentType == "line"){
      console.log("line on");
      this.chart.area().position("time*close").color(color)
      this.chart.line().position("time*close").color(color)
      this.chart.point().position("time*close").color(color).size(2)
    }else{

      console.log("candle on");
      this.chart.schema().position("time*candleInterval").size(this.data.currentTime == "Past 100 Days" || "Past 3 Month"? 2 : 5).color('trend', function(trend) {
        return ['#F4333C', '#1CA93D'][trend]
      }).shape("candle")
    }
    this.chart.tooltip({
      alwaysShow:false,
      showCrosshairs:true,
      crosshairsType:"xy",
      lineCap:"butt",
      showTitle:true,

      onShow(target){
        console.log(target);

        if(currentType == "candle"){
          target.items[0] = {...target.items[0],name:"close", value:target.items[0].origin.close}
          target.items.push({...target.items[0],name:"open", value:target.items[0].origin.open})
          target.items.push({...target.items[0],name:"low", value:target.items[0].origin.low})
          target.items.push({...target.items[0],name:"high", value:target.items[0].origin.high})


        }
      }
    })

    this.chart.render()

    return this.chart
  },

  test(e) {
    console.log(e);
  },

  changeType(){
    switch (this.data.currentType) {
      case "line":
        this.setData({currentType:"candle"})
        break;
      
      case "candle":
        this.setData({currentType:"line"})
        break;
      default:
        break;
    }
    console.log(this.data.currentType);
    this.initChart()
  },

  onChangeTime(e) {
    // console.log(e);
    let {
      type
    } = e.target.dataset
    console.log("triggered");
    // this.setData({displayChart:false})
    // this.chart.destroy()
    this.setData({currentTime: type})
    this.initChart( )
    // this.setData({displayChart:true})

    // my.redirectTo({
    //   url: '/page/trading-detail/trading-detail?symbol=' + my.getStorageSync({
    //     key: "symbol"
    //   }).data + "&currentTime=" + type
    // });
  },

  changeSlider(e){
    console.log(e);
    console.log(e[1], this.data.zoom);
    this.setData({
      zoom: 100 * e[1],
    })
    
    this.initChart(this.data.f2,this.data.chartConfig )
  }
});