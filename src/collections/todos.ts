import generateItem from "../helpers/generateItem.ts";
import type { Item, Task } from "../interfaces/interfaces"

const todos: Item[] = [];

const task1: Task = {
    name: `Simple In-Memory API for Managing Items`,
    task: `create Simple In-Memory API for Managing Items`,
    finished: false
}

const task2: Task = {
    name: `Simple React To-Do List with Filtering`,
    task: `create Simple React To-Do List with Filtering`,
    finished: false
}

const task3: Task = {
    name: `API with Basic Validation and Error Handling`,
    task: `create API with Basic Validation and Error Handling`,
    finished: false
}

const task4: Task = {
    name: `Simple React Data Fetching and Display`,
    task: `create React Data Fetching and Display`,
    finished: false
}

todos.push(generateItem(task1, todos));
todos.push(generateItem(task2, todos));
todos.push(generateItem(task3, todos));
todos.push(generateItem(task4, todos));

export default todos;