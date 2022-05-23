const {product} = require("../../models");

exports.addProduct = async (req, res) => {
    try {
        await product.create(req.body);

        res.send({
            status: 'success',
            message: 'Add Product Success..'
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
};

exports.getProduct = async (req, res) => {
    // code here
    try {
        const products = await product.findAll();

        // `SELECT name,email, status, id FROM`
        res.send({
            status: "success",
            data: {
                products
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

exports.getProductbyId = async (req, res) => {
    try {
        const { id } = req.params

        const data = await product.findOne({
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

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params

        await product.update(req.body, {
            where: {
                id
            }
        });

        res.send({
            status: 'success',
            message: `Update product id: ${id}`,
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

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

        await product.destroy({
            where: {
                id
            }
        });

        res.send({
            status: "success",
            message: `Delete product id:${id}`
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
};
