const express = require("express");
const bcrypt = require("bcrypt");
const { User, Post } = require("../models");
const passport = require("passport");
const router = express.Router();

//NOTE: passport/user.js에서 callback done(...)의 응답값을 각 파라미터로 받음
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/", async (req, res, next) => {
  //post '/user'

  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060');
    //res.setHeader('Access-Control-Allow-Origin', '*');//모두 허용
    res.status(200).send(req.body);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/user/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send("logout comp!!");
});
module.exports = router;
