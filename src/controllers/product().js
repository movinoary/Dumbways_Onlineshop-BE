const {product, category, user, categoryProduct} = require("../../models");

exports.addProduct = async (req, res) => {
    try {
        const { category: categoryName, ...data } = req.body;

        const newProduct = await product.create({
            ...data,
            image: req.file.filename,
            idUser: req.user.id
        });

        const categoryData = await category.findOne({
            where: {
                name: categoryName,
            },
        });
        


    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
};

exports.getProduct = async (req, res) => {
    try {
        const products = await product.findAll({
            include: [
                {
                  model: user,
                  as: "user",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "password"],
                  },
                },
                {
                  model: category,
                  as: "category",
                  through: {
                    model: categoryProduct,
                    as: "bridge",
                    attributes: {
                      exclude: ["createdAt", "updatedAt"],
                    }
                  },
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                }
              ],
              attributes: {
                exclude: ["createdAt", "updatedAt", "idUser"],
              },
            });

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