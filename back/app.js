const express = require("express");
const postRouter = require("./rotes/post");
const cors = require("cors");
const userRouter = require("./rotes/user");
const app = express();
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공!!!!");
  })
  .catch(console.error);

app.use(
  cors({
    //origin:'https://hodebird.com',
    origin: true, //'*' 동일
    credentials: false, //(default)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello express!!!!!!!!");
});

//NOTE:user 함수 내 첫번째 인자에 prefix로 붙는 api url을 작성할 수있다.
app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행중!");
});
