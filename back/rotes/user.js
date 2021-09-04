const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const router = express.Router();

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

module.exports = router;
