import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { Router } from "express";

module.exports = async App => {
	const router: Router = Router();
	router.get('/', async (req: Request, res: Response) => {
		res.send("Hello from index?");
	});
	App.use("/api", router);
};