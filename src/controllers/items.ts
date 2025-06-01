import type { Request, Response } from "express";
import todos from "../collections/todos.ts";
import type { Task, Item } from "../interfaces/interfaces";
import generateItem from "../helpers/generateItem.ts";

const todoList = todos;

export async function getItems(req: Request, res: Response): Promise<void> {
    res.status(200).json(todoList);
    
}

export async function postItem(req: Request, res: Response): Promise<any> {

    if (!req?.body?.name || !req?.body?.task) return res.status(400).json(`Bad input body`);
    let finished: boolean = false;

    if(req.body.finished == true) {
        finished = true
    }

    const newTask: Task = {
        name: req?.body?.name,
        task: req?.body?.task,
        finished: finished
    }

    const newItem: Item = generateItem(newTask, todoList);
    todoList.push(newItem);

    res.status(201).json(newItem);
}


export async function changeFinish(req: Request, res: Response): Promise<any> {
    const targetId = req?.body?.id
    if (!targetId) return res.status(400).json(`Bad input body`);
    const index = todoList.findIndex(item => item.id === targetId);
    if(index == -1) return res.status(404).end();
    todoList[index].finished = !(todoList[index].finished);
    return res.status(200).json(todoList[index]);
}

export async function updateItem(req: Request, res: Response): Promise<any> {
    const targetId = req?.body?.id
    if (!targetId) return res.status(400).json(`Bad input body`);
    const index = todoList.findIndex(item => item.id === targetId);
    if(index == -1) return res.status(404).end();
    todoList[index] = req.body
    return res.status(200).json(todoList[index]);
}

export async function deleteItem(req: Request, res: Response): Promise<any> {
    const targetId = req?.body?.id
    if (!targetId) return res.status(400).json(`Bad input body`);
    const index = todoList.findIndex(item => item.id === targetId);
    if(index == -1) return res.status(404).end();
    const deleted = todoList.splice(index, 1);
    return res.status(204).json(deleted);

}