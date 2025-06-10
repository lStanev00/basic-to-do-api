import { Request, Response, NextFunction } from "express";
export default async function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): Promise<void> {
    console.warn(err.stack);
    res.status(500).send(`Generic Server Error!`);

}