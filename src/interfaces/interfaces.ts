export interface Task {
    name: string,
    task: string,
    finished: boolean,
}

export interface Item extends Task {
    id: number;
};