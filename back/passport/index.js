const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); //req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  local();
};

//serializeUser id를 저장 후, 해당정보로 deserializeUser 복구해서 사용자 정보를 만든다.
