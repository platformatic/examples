/**
 * Movie
 * A Movie
 */
declare interface Movie {
    id?: number;
    createdAt?: string | null;
    directorId: number;
    producerId: number;
    releasedYear: number;
    title: string;
    updatedAt?: string | null;
}
export { Movie };
