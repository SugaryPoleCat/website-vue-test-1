import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { Router } from "express";

module.exports = async App => {
	const router: Router = Router();
	router.use((req: Request, res: Response, next: NextFunction) => {
		console.log("Time:", new Date().toUTCString());
	});
	router.get('/', async (req: Request, res: Response) => {
		res.send("Hello from index?");
	});
	App.use("/api", router);
};