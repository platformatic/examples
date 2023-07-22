/**
 * Task
 * A Task
 */
declare interface Task {
    id?: number;
    createdAt?: string | null;
    description: string;
    priority: number;
    updatedAt?: string | null;
    userId: number;
}
export { Task };
