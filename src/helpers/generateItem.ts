import type { Task, Item } from "../interfaces/interfaces";

export default function generateItem(task: Task, todos: Item[]): Item {
    return {
        ...task,
        id: Date.now() + todos.length
    };
}