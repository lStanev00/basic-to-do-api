import type { Request, Response, NextFunction } from "express";
import todos from "../collections/todos.ts";
import type { Task, Item } from "../interfaces/interfaces";
import generateItem from "../helpers/generateItem.ts";

const todoList = todos;

export async function getItems(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        res.status(200).json(todoList);
        
    } catch (error) {
        next(error);

    }
    
}

export async function getItem(req: Request, res: Response, next: NextFunction): Promise<void> {

    try {
        const id: number = Number(req.params.id);
    
        const item = todoList.find(item => item.id === id); 
    
        if (!item) {
            res.status(404).json({ message: "Item not found" });
            return;
        }
    
        res.status(200).json(item);
        
    } catch (error) {
        next(error);

    }
}

export async function postItem(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
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
        
    } catch (error) {
        next(error);

    }

}


export async function changeFinish(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
        const targetId = req?.body?.id
        if (!targetId) return res.status(400).json(`Bad input body`);

        const index = todoList.findIndex(item => item.id === targetId);
        if(index == -1) return res.status(404).end(`Item not found`);

        todoList[index].finished = !(todoList[index].finished);
        return res.status(200).json(todoList[index]);
        
    } catch (error) {
        next(error);

        
    }
}

export async function updateItem(req: Request, res: Response, next: NextFunction): Promise<any> {

    
    if (!req.body.name) {
        return res.status(400).json(`Missing "name" field`);
    }
    if (!req.body.task) {
        return res.status(400).json(`Missing "task" field`);
    }

    try {
        const targetId = req?.body?.id
        if (!targetId) return res.status(400).json(`Bad input body`);

        const index = todoList.findIndex(item => item.id === targetId);
        if(index == -1) return res.status(404).end(`Item not found`);

        todoList[index] = req.body
        return res.status(200).json(todoList[index]);
        
    } catch (error) {
        next(error);

    }
}

export async function deleteItem(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const targetId = req?.body?.id
        if (!targetId) return res.status(400).json(`Bad input body`);

        const index = todoList.findIndex(item => item.id === targetId);
        if(index == -1) return res.status(404).end();

        const deleted = todoList.splice(index, 1);
        return res.status(200).json(todoList);
        
    } catch (error) {
        next(error);

    }

}