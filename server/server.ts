import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
// doeanst want to uimport for no reaeson.
import { router } from "./router/index";
// console.log(__dirname);
// const tuter = require(path.join(__dirname, "router/index"));
async function run() {
	const App = express();
	App.use(cors());
	const vuePath = path.join(__dirname, "../vue/dist");
	App.use(express.static(vuePath));

	try {
		// router doesnt seem to work right withvure
		App.use("*", router);
		// App.get("/", (req: Request, res: Response) => {
		// 	res.send("Hello! It seems its still under development");
		// });

		// App.get('*', (req: Request, res: Response) => {
		// 	res.sendFile(path.join(vuePath, "index.html"));
		// });
	} catch (err: any) {
		throw new Error(String(err.message));
	}

	const PORT = Number(process.env.PORT) || 1501;
	try {
		App.listen(PORT, () => {
			console.log("listening on port", PORT);
		});
	} catch (err: any) {
		throw new Error(String(err.message));
	}
}
(async () => {
	try {
		await run();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
})();