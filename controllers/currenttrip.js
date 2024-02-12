const User = require('../models/User')

module.exports = {
    getCurrenttrip: async (req, res) => {
        try {
          const user = await User.find({ user: req.user.id });
          res.render("currenttrip.ejs", { user: req.user });
        } catch (err) {
          console.log(err);
        }
      }
}