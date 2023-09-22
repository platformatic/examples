/**
 * Book
 * A Book
 */
declare interface Book {
    id?: number;
    authorId: number;
    createdAt?: string | null;
    publishedYear: number;
    title: string;
    updatedAt?: string | null;
}
export { Book };
