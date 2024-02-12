const User = require('../models/User')

module.exports = {
    getReference: async (req, res) => {
        try {
          const user = await User.find({ user: req.user.id });
          res.render("reference.ejs", { user: req.user });
        } catch (err) {
          console.log(err);
        }
      }
}