const {profile} = require("../../models");

exports.addProfile = async (req, res) => {
    try {
        await profile.create(req.body);

        res.send({
            status: 'success',
            message: 'Add Profile Success..'
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
};

exports.getProfile = async (req, res) => {
    // code here
    try {
        const data = await profile.findAll();

        // `SELECT name,email, status, id FROM`
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

exports.getProfilebyId = async (req, res) => {
    try {
        const { id } = req.params

        const data = await profile.findOne({
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

exports.updateProfile = async (req, res) => {
    try {
        const { id } = req.params

        await profile.update(req.body, {
            where: {
                id
            }
        });

        res.send({
            status: 'success',
            message: `Update profile id: ${id}`,
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

exports.deleteProfile = async (req, res) => {
    try {
        const { id } = req.params

        await profile.destroy({
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
