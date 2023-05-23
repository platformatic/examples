/**
 * Post
 * A Post
 */
declare interface Post {
    id?: number;
    title: string;
    body: string;
    authorUserId?: string | null;
    authorName?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}
export { Post };
