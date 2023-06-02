import express, { Request, Response, Express, NextFunction } from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import router from "./router/routes";
const vuePath: string = path.join(__dirname, "../vue/dist");
async function run(): Promise<void> {
	const app: Express = express();
	try {
		app.use(express.static(vuePath));
		app.use(router);
		// app.use("/api", router);
		// app.use(cors());
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		// app.get('/', (req, res) => {
		// });
	} catch (e: any) { throw new Error(String(e.message)); }
	// try {
	// 	app.get('*', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
	// 		response.sendFile(path.join(vuePath, "index.html"));
	// 	});
	// } catch (err: any) {
	// 	throw new Error("ERROR  HGappENED!!!!" + String(err.message));
	// }
	const PORT: number = Number(process.env.PORT) || 1501;
	try {
		app.listen(PORT, async (): Promise<void> => {
			console.log("listening on port", PORT);
		});
	} catch (err: any) { throw new Error("ERROR HappENED!!!!" + String(err.message)); }
}
(async (): Promise<void> => {
	try { await run(); } catch (err) { console.error("CONSOLE ERRROR!!!", err); }
})();