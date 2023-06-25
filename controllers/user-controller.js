
const User = require("../model/User")
const bcrypt = require("bcryptjs")



const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (err) {
        console.log("udata base not");
    }
    if (!users) {
        return res.status(404)
    }
    console.log(users);
    return res.status(200).json({ users })


}

const signUp = async (req, res, next) => {
    const { name, email, password } = req.body
    console.log("data from signup req.body" + req.body);
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
        console.log("no error on momngoDb existing user")
    } catch (err) {
        return console.log(" error occured on existing user ");

    }
    if (existingUser) {
        return res
            .status(404)
            .json({ message: "user already existing..." })
    }
    const HashedPass = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: HashedPass
    })
    try {
        await user.save();
    } catch (err) {
        console.log("new user adding data error");
    }
    return res.status(200)
        .json({ user })

}
const login = async (req, res, next) => {
    const { email, password } = req.body
    console.log("data from login req.body" + req.body);
    let existingUser;
    try {
        existingUser = await User.findOne({ email })

    } catch (err) {
        return console.log(" error occured on existing user ");

    }
    if (!existingUser) {
        return res
            .status(404)
            .json({ message: "couldn't find user by this mail" })
    }

    const isPassCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPassCorrect) {
        return res
            .status(404)
            .json({ message: "password incorrect" })
    } return res.status(200)
        .json({ message: existingUser.name + "  " + "is  logged successfully" })

}

module.exports = { getAllUser, signUp, login }
