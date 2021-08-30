const express = require("express");
const postRouter = require("./rotes/post");
const app = express();
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("hello express");
});

//NOTE:user 함수 내 첫번째 인자에 prefix로 붙는 api url을 작성할 수있다.
app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행중");
});
