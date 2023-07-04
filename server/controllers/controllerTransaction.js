const { Transaction, sequelize, User, TransactionItem } = require("../models")
class ControllerTransaction {

    static async createTransaction(req, res, next) {
        const t = await sequelize.transaction()
        try {
            let { id } = req.user
            let { totalPrice, payMethod, totalItem, cart } = req.body
            let { dataValues } = await User.findByPk(id)
            let user = dataValues
            let status = "unpaid"
            if (payMethod == "saldo") {

                let { saldo } = user

                if (saldo < totalPrice) {
                    throw { name: "Insufficient" }
                }

                await User.update({ saldo: user.saldo - totalPrice }, { where: { id } }, { transaction: t })
                status = "paid"
            }

            let transaction = await Transaction.create({ UserId: id, totalItem, totalPrice, payMethod, status }, { transaction: t })
            let updatedCart = cart.map(el => {
                console.log(transaction.dataValues.id);
                let output = {
                    ItemId: el.id,
                    TransactionId: transaction.dataValues.id,
                    item: el.title,
                    price: el.finalPrice ? el.finalPrice : el.price,
                    totalPrice: el.finalPrice ? el.finalPrice * el.stockSelected : el.price * el.stockSelected,
                    totalPiece: el.stockSelected,
                    buyer: user.username,
                    thumbnailUrl:el.thumbnail,
                    brand:el.brand,
                    category:el.category
                }

                return output
            })

            await TransactionItem.bulkCreate(updatedCart, { transaction: t })
            await t.commit()

            res.status(201).json({ message: "Transaction Created" })
        } catch (error) {
            t.rollback()
            next(error)
        }  
    }

    static async getTransactions(req,res, next){
        try {
            let {id} = req.user
            console.log(id);
            let transaction = await Transaction.findAll({include:TransactionItem,where: {UserId: id}})
            res.status(200).json(transaction)
        } catch (error) {
            next(error)

        }
    }
}

module.exports = ControllerTransaction