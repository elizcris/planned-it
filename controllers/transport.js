const User = require('../models/User')

module.exports = {
    getTransport: async (req, res) => {
            try {
              const user = await User.find({ user: req.user.id });
              res.render("transport.ejs", { user: req.user });
            } catch (err) {
              console.log(err);
            }
        }}