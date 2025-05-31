import type { Task, Item } from "../types/types.ts";

export default function generateItem(task: Task): Item {
    return {
        ...task,
        id: Date.now()
    };
}