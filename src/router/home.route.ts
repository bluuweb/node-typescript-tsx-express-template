import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.post("/", (_, res) => {
  res.send("Hello World!");
});

export default router;
