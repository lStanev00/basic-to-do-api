export type Task = {
    name: string,
    task: string,
    finished: boolean,
}

export type Item = Task & {
    id: number;
};