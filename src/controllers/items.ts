import type { Request, Response } from "express";

export async function getItems(req: Request, res: Response): Promise<void> {
    res.send(`Items`);
    
}

export async function postItem(req: Request, res: Response): Promise<void> {
    res.send(`Item`);
}

