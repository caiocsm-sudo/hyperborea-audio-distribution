import { Router, Request, Response } from "express";
const router: Router = Router();

router.route("/api/songs").get((_req: Request, res: Response): void => {
  res.json({ name: "tomar no cu", songReference: "Junju Ito" });
});

export default router;
