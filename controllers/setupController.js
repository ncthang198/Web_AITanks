const User = require('../models/user');
const bcrypt = require('bcryptjs');
const config = require('config');

exports.setup = async (req, res) => {
    let pass = await bcrypt.hash(config.get('pass'), 10);

    const body = req.body;
    if (body.pass === "Tkangg@3") {
        const check = await User.findOne({ userName: config.get('userName') });
        if (check) {
            console.log(check)
            res.json({
                mes: "setuped"
            })
        } else {
            let user = new User({

                userName: body.userName,
                password: pass,
                studentID: "1141360030",
                email: "admin@gmail.com",
                userName: config.get('userName'),
                password: pass,
                firstName: config.get('userName'),
                lastName: config.get('userName'),
                role: "admin",
                status: true,
                hash: await bcrypt.hash(config.get('userName') + "admin" + config.get('sercret'), 10)
            });
            user.save()
                .then(result => {
                    res.json({
                        status: true
                    })
                })
                .catch(err => {
                    res.json({
                        mes: err
                    })
                })
        }
    } else {
        res.json({
            status: false
        })
    }

}