const { user } = require("../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

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

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt)

        const newUser = await user.create({
            name: data.name,
            email: data.email,
            password: hashedPassword,
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
        res.status(500).send({
            status: "failed",
            message: "Server Error"
        });  
    };
};

exports.login = async (req, res) => {
    const data = req.body;
    
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
        
    const {error} = schema.validate(data);

    if(error){
        return res.status(400).send({
            status: "error",
            message: error.details[0].message
        })
    };
        
    try {
        const userExist = await user.findOne({
            where: {
                email: data.email
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
        });
        
        if(!userExist){
            return res.status(400).send({
                status: "Failed",
                message: "Data Not Found"
            })
        };

        const isValid = await bcrypt.compare(data.password, userExist.password)

        if(!isValid){
            return res.status(400).send({
                status: "Failed",
                message: "Email and Password doesnt match"
            })
        };

        const dataToken = {
            id: userExist.id
        }

        const SECRET_KEY = 'sangatrahasia'
        const token = jwt.sign(dataToken, SECRET_KEY)

        res.status(200).send({
            status: "success",
            data: {
                email: userExist.email,
                password: userExist.password,
                token
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error"
        });
    };
};

exports.logout = async(req,res) => {
    res.cookie('jwt', '', {maxAge:1});
}