const User = require('../models/User')

module.exports = {
    getTripbuilder: async (req, res) => {
        try {
          const user = await User.find({ user: req.user.id });
          res.render("tripbuilder.ejs", { user: req.user });
        } catch (err) {
          console.log(err);
        }
      }
}