const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/api", (req, res) => {
  res.send("api 페이지로 이동");
});

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});
app.post("/api/posts", (req, res) => {
  res.json({ id: 1, content: "hello" });
});
app.delete("/api/posts", (req, res) => {
  res.json({ id: 1 });
});

app.listen(3065, () => {
  console.log("서버 실행중");
});
