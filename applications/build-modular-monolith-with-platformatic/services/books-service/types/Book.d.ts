/**
 * Book
 * A Book
 */
declare interface Book {
    id?: number;
    title: string;
    authorId: number;
    publishedYear: number;
    createdAt?: string | null;
    updatedAt?: string | null;
}
export { Book };
