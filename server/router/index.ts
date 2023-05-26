import express, { Request, Response, NextFunction } from "express";
import path from "path";
const vuePath = path.join(__dirname, "../../vue/dist");
export const router = express.Router();
const fileToSend = path.join(vuePath, "index.html");
// const poop = () => {
router.use((req: Request, res: Response, next: NextFunction) => {
	console.log("Time:", new Date().toUTCString());
	next();
});
// router.get('*', (req: Request, res: Response, next: NextFunction) => {
// 	// console.log(__dirname);
// 	res.sendFile(path.join(vuePath, "index.html"));
// });
router.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello! This is still under development!");
	res.sendFile(fileToSend);
	// console.log(__dirname);
});
router.get('/about', (req: Request, res: Response) => {
	res.sendFile(fileToSend);
});
