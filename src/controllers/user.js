const {user} = require('../../models');

exports.addUser = async (req, res) => {
    try {
        await user.create(req.body);

        res.send({
            status: 'success',
            message: 'Add user'
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
};

exports.getUser = async (req, res) => {
    // code here
    try {
        const users = await user.findAll({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        });

        // `SELECT name,email, status, id FROM`
        res.send({
            status: "success",
            data: {
                users
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

exports.getUserbyId = async (req, res) => {
    try {
        const { id } = req.params

        const data = await user.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
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

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params

        await user.update(req.body, {
            where: {
                id
            }
        });

        res.send({
            status: 'success',
            message: `Update user id: ${id}`,
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

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        await user.destroy({
            where: {
                id
            }
        });

        res.send({
            status: "success",
            message: `Delete user id:${id}`
        });
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
};
