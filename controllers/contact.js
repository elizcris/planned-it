const User = require('../models/User')

module.exports = {
    getContact: async (req, res) => {
            try {
              const user = await User.find({ user: req.user.id });
              res.render("contact.ejs", { user: req.user });
            } catch (err) {
              console.log(err);
            }
        }}