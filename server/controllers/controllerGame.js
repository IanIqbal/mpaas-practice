const {Savedata, sequelize} = require("../models/");


class ControllerGame{

    static async createSaveData(req,res,next){
        const t = await sequelize.transaction()
        try {
            console.log(req.body);
            let {score, charx1, charx2, charx3,chary1,chary2,chary3} = req.body
            // let {id} = req.user
            let id = 1


            let savedata = await Savedata.findOne({where:{UserId:id}})

            if(!savedata){
                console.log("create");
                await Savedata.create({high_score:score, charx1,charx2,charx3, chary1, chary2, chary3, UserId:id})
            }else{
                console.log("update");
                await Savedata.update({ high_score:score},{where:{Userid:id}})
            }


            await t.commit()
            res.status(201).json({message:"save data created"})
        } catch (error) {
            await t.rollback()
            next(error)
        }
    }

    static async getSaveData(req,res,next){
        try {
            // let {id} = req.user
            let id = 1


            let savedata = await Savedata.findAll({where:{UserId:id}, order: [['createdAt', 'DESC']]})
            // let savedata = await Savedata.findOne({where:{id: gamedata.dataValues.gjds_saveId}})
            console.log(savedata);

            res.status(200).json({savedata: savedata[0]})
        } catch (error) {
            next(error)
        }   
    }

  
}

module.exports = ControllerGame