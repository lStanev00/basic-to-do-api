export type Task = {
    name: string,
    task: string,
    finished: boolean,
}

export type Item = Task & {
    id: number;
};

export function generateItem(task: Task): Item {
    return {
        ...task,
        id: Date.now()
    };
}