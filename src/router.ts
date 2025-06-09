import { Router } from "express";
import { changeFinish, deleteItem, getItems, postItem, updateItem } from "./controllers/items.ts";

const router = Router();

router.get(`/items`, getItems);
router.get(`/items/:id`, getItems);
router.post(`/items`, postItem);
router.patch(`/items`, changeFinish)
router.put(`/items`, updateItem);
router.delete(`/items`, deleteItem)

export default router