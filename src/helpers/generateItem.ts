import type { Task, Item } from "../types/types";

export default function generateItem(task: Task): Item {
    return {
        ...task,
        id: Date.now()
    };
}