import express from "express";
import morgan from "morgan";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import rootRouter from "./router/rootRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

//express application 생성

app.set("view engine", "pug");
//process.cwd() = 현재 프로젝트 경로
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

//요청이 들어왔을때 그 요청을 listen , 서버를 염
app.listen(PORT, () => console.log("Welcome to Server http://localhost:4000/"));
