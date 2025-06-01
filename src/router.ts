import { Router } from "express";
import { changeFinish, deleteItem, getItems, postItem } from "./controllers/items.ts";

const router = Router();

router.get(`/items`, getItems);
router.post(`/items`, postItem);
router.patch(`/items`, changeFinish)
router.delete(`/items`, deleteItem)

export default router