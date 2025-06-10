import { Router } from "express";
import { changeFinish, deleteItem, getItems, postItem, updateItem, getItem } from "./controllers/items.ts";
import errorMiddleware from "./middlewares/error.ts";

const router = Router();

router.get(`/items`, getItems);
router.get(`/items/:id`, getItem);
router.post(`/items`, postItem);
router.patch(`/items`, changeFinish)
router.put(`/items`, updateItem);
router.delete(`/items`, deleteItem);
router.use(`/`, errorMiddleware)
router.use(`/`, (_,res): void => {
    res.status(404).send(`No such route`)
});

export default router