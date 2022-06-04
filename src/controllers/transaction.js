const { transaction, user, product } = require("../../models");

exports.addTransaction = async (req, res) => {
    try {
        await transaction.create(req.body);

        res.send({
            status: 'success',
            message: 'Add Transaction Success..'
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
};

exports.getTransaction = async (req, res) => {
    try {
        const data = await transaction.findAll({
            include: [
                {
                    model: product,
                    as: "product",
                    exclude: ["createdAt", "updatedAt"],
                },
                {
                  model: user,
                  as: "buyer",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "password"],
                  },
                },
                {
                    model: user,
                    as: "seller",
                    attributes: {
                      exclude: ["createdAt", "updatedAt", "password"],
                    },
                  },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", "idSaller", "idBuyer", "idProduct"],
            },            
        });

        res.send({
            status: "success",
            data: {
                data
            }
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
};

exports.getTransactionbyId = async (req, res) => {
    try {
        const { id } = req.params

        const data = await transaction.findOne({
            where: {
                id: id
            }
        });

        res.send({
            status: "success",
            data: {
                data
            }
        });

    } catch (error) {
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
};

exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params

        await transaction.update(req.body, {
            where: {
                id
            }
        });

        res.send({
            status: 'success',
            message: `Update Transaction id: ${id}`,
            data: req.body
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params

        await transaction.destroy({
            where: {
                id
            }
        });

        res.send({
            status: "success",
            message: `Delete profile id:${id}`
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
};
