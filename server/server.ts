import express, { Request, Response, Express, NextFunction } from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
const vuePath: string = path.join(__dirname, "../vue/dist");

async function run(): Promise<void> {
	const App: Express = express();
	App.use(cors());
	App.use(express.static(vuePath));
	App.use(bodyParser.json());
	App.use(bodyParser.urlencoded({ extended: true }));

	try {
		App.get('*', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
			response.sendFile(path.join(vuePath, "index.html"));
		});
	} catch (err: any) {
		throw new Error("ERROR  HGAPPENED!!!!" + String(err.message));
	}

	const PORT: number = Number(process.env.PORT) || 1501;
	try {
		App.listen(PORT, async (): Promise<void> => {
			console.log("listening on port", PORT);
		});
	} catch (err: any) {
		throw new Error("ERROR HAPPENED!!!!" + String(err.message));
	}
}
(async (): Promise<void> => {
	try {
		await run();
	} catch (err) {
		console.error("CONSOLE ERRROR!!!", err);
	}
})();