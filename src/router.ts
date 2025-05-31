import { Router } from "express";
import { getItems, postItem } from "./controllers/items.ts";

const router = Router();

router.get(`/items`, getItems);
router.post(`/items`, postItem);

export default router