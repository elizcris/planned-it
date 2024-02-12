const User = require('../models/User')

module.exports = {
    getCompletedtrips: async (req, res) => {
        try {
          const user = await User.find({ user: req.user.id });
          res.render("completedtrips.ejs", { user: req.user });
        } catch (err) {
          console.log(err);
        }
      }
}