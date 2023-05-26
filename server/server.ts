import express, { Request, Response } from "express";
import cors from "cors";
async function run() {
	const App = express();
	App.use(cors());

	try {
		App.get("/", (req: Request, res: Response) => {
			res.send("Hello! It seems its still under development");
		});
	} catch (err: any) {
		throw new Error(String(err.message));
	}

	const PORT = Number(process.env.PORT) || 1501;
	try {
		App.listen(PORT, () => {
			console.log("listening on port" + PORT);
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