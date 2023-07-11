const { Company } = require("../models")
const { default: axios } = require("axios")

class ControllerInvest {
    static async getMainStock(req, res, next) {
        try {

            let companies = await Company.findAll()

            res.status(200).json(companies)
        } catch (error) {
            next(error)
        }
    }

    static async getStockDetail(req, res, next) {
        try {

            
            let { symbol } = req.params
            let { data } = await axios({
                url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&interval=5min&apikey=${process.env.API_KEY}`,
                method: "get"
            })
            console.log(data);
            let tidyData = []
            for (let key in data["Time Series (Daily)"]) {

                let output = {}
                output.time = key

                for (let smallerKey in data["Time Series (Daily)"][key]) {

                    let convertedSmallerKey = smallerKey.split(" ")[1]
                    let value = data["Time Series (Daily)"][key][smallerKey]
                    // console.log(value, typeof(value));
                    output[convertedSmallerKey] = +value
                }
                tidyData.push(output)
            }
            
            tidyData.forEach(el =>{
                el.candleInterval = [el.open, el.close, el.high, el.low ]
                el.trend = el.open <= el.close? 0 : 1
            })

            let tidyMetaData = {}
            for(let key in data["Meta Data"]){
                let property = key.split(". ")[1].split(" ").join("-").toLocaleLowerCase()

                tidyMetaData[property] = data["Meta Data"][key]
            } 

            console.log(tidyMetaData);
            let updatedData = {metaData:tidyMetaData, detailData:tidyData, detailWeek:tidyData.slice(0,5), detailMonth:tidyData.slice(0,20), detailThreeMonth:tidyData.slice(0,60)}
            res.status(200).json(updatedData)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerInvest