import express, { Request, Response } from "express";
import cors from "cors";
const App = express();
App.use(cors());

App.get("/", (req: Request, res: Response) => {
	res.send("Hello! It seems its still under development");
});

const PORT = process.env.PORT || 1501;
App.listen(PORT, () => {
	console.log("listening on port" + PORT);
});