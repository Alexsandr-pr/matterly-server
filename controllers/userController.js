const User = require("../models/User");
const {validationResult} = require("express-validator");

class UserController  {
    async addUser(req, res) {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Incorrectly entered email" });
        }
    
        const { email, name = "" } = req.body; 
        
        const checkUser = await User.findOne({ email });
    
        if (checkUser) {
            return res.status(400).json({ message: `A user with this email: ${email} already exists` });
        }
    
        const user = new User({
            email: email,
            name: name || "Unknown", 
        });
    
        await user.save();
        return res.status(200).json({ message: "You have successfully signed up" });
    }
}

module.exports = new UserController