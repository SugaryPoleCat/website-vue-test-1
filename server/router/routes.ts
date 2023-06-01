import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { Router } from "express";
const vuePath: string = path.join(__dirname, "../../vue/dist");

// module.exports = async app => {
const router: Router = Router();
router.use((req: Request, res: Response, next: NextFunction) => {
	console.log("Time:", new Date().toUTCString());
	next();
});
router.get('/', (req: Request, res: Response, next) => {
	res.sendFile(path.join(vuePath, "index.html"));
	// next();
});
// router.get("/about", (req, res, next) => {
// 	res.sendFile(path.join(vuePath, "index.html"));
// 	// next();
// });
// app.use("/api", router);
// };

export default router;