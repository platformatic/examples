/**
 * Task
 * A Task
 */
declare interface Task {
    id?: number;
    description: string;
    priority: number;
    userId: number;
    createdAt?: string | null;
    updatedAt?: string | null;
}
export { Task };
