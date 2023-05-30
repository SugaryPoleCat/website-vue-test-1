import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { Router } from "express";
const vuePath: string = path.join(__dirname, "../vue/dist");

module.exports = async App => {
	const router: Router = Router();
	router.use((req: Request, res: Response, next: NextFunction) => {
		console.log("Time:", new Date().toUTCString());
		next();
	});
	router.get('/', async (req: Request, res: Response) => {
		// res.send("Hello from index?");
		res.sendFile(path.join(vuePath, "index.html"));
		// next();
	});
	App.use("/api", router);
};