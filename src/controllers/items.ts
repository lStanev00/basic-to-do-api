import type { Request, Response } from "express";
import todos from "../collections/todos.ts";

const todoList = todos;

export async function getItems(req: Request, res: Response): Promise<void> {
    res.status(200).json(todoList);
    
}

export async function postItem(req: Request, res: Response): Promise<void> {
    res.send(`Item`);
}

