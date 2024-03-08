const User = require('../models/User')

module.exports = {
    getTodo: async (req, res) => {
            try {
              const user = await User.find({ user: req.user.id });
              res.render("todo.ejs", { user: req.user });
            } catch (err) {
              console.log(err);
            }
        }}