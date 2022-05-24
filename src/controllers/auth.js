const { user } = require("../../models");

const Joi = require("joi");

exports.register = async (req, res) => {
    try {
        const data = req.body;

        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            status: Joi.string().required()
        });

        const {error} = schema.validate(data);

        if(error){
            return res.status(400).send({
                status: "error",
                message: error.details[0].message
            })
        };

        const newUser = await user.create({
            name: data.name,
            email: data.email,
            password: data.password,
            status: data.status
        });
        
        res.status(200).send({
            status: "success",
            data: {
                name: newUser.name,
                email: newUser.email,
            }
        })

    } catch (error) {
        res.send({
            status: "failed",
            message: "Server Error"
        })   
    }
};