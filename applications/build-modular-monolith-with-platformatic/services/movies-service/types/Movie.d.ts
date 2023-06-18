/**
 * Movie
 * A Movie
 */
declare interface Movie {
    id?: number;
    title: string;
    directorId: number;
    producerId: number;
    releasedYear: number;
    createdAt?: string | null;
    updatedAt?: string | null;
}
export { Movie };
