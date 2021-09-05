const express = require("express");
const postRouter = require("./routes/post");
const cors = require("cors");
const userRouter = require("./routes/user");
const passport = require("passport");
const dotenv = require("dotenv");
const db = require("./models");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passportConfig = require("./passport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공!!!!");
  })
  .catch(console.error);
passportConfig();

app.use(
  cors({
    //origin:'https://hodebird.com',
    origin: true, //'*' 동일
    credentials: false, //(default)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express!!!!!!!!");
});

//NOTE:user 함수 내 첫번째 인자에 prefix로 붙는 api url을 작성할 수있다.
app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행중!");
});
