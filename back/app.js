const express = require("express");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const hashtagRouter = require("./routes/hashtag");
const cors = require("cors");
const userRouter = require("./routes/user");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const db = require("./models");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passportConfig = require("./passport");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

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
    origin: ["http://localhost:3060", "http://happy-sns.site"], //'*' 동일 단, withCredentials을 쓰면 주소를 명확히 쓰도록 에러 발생
    credentials: true, // CORS Access-Control-Allow-Credentials Cookie도 같이 전달하기 위함
  })
);

//express에서 프론트가 접근할 수 있도록 설정
// back 내부에서 uploads 폴더를 바로 결합해준다.
// '/'는 http://localhost:3060을 말함
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false, // https적용시 true로 변경예정
      domain: process.env.NODE_ENV === "production" && ".happy-sns.site",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express!!!!!!!!");
});

//NOTE:user 함수 내 첫번째 인자에 prefix로 붙는 api url을 작성할 수있다.
//NOTE:router 순서에 의해 다음게 실행이 안되고 프로그램이 멈출 수 있기때문에 순서 중요
app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

//에러를 커스터마이징 next(error) 처리
// app.use((err,req,res,next)=>{

// });

//app.listen(3065, () => {
app.listen(80, () => {
  console.log("서버 실행중!");
});
