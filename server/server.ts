import express, { Request, Response } from "express";
import cors from "cors";
const App = express();
App.use(cors());

App.get("/", (req: Request, res: Response) => {
	res.send("Hello!");
});

const PORT = process.env.PORT || 3000;
App.listen(PORT, () => {
	console.log("listening on port" + PORT);
});