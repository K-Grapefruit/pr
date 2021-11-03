import express from "express";
const PORT = 4000;

//express application 생성
const app = express();

app.get("/", (req, res) => {
  //요청을 끝내고 싶다
  //return res.end();
  //메세지 보내기
  res.send("무야호~");
});

app.get("/login", (req, res) => {
  return res.send("<h1>Login Page<h1>");
});

//요청이 들어왔을때 그 요청을 listen
app.listen(PORT, () => console.log("Welcome to Server http://localhost:4000/"));
