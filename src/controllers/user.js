const {user} = require('../../models');

exports.addUser = async (req, res) => {
    try {
        await user.create(req.body);

        res.send({
            status: 'success',
            message: 'finish add user'
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