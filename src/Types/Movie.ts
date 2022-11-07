export type TMovie = {
    id: number | string,
    title: string | undefined,
    summary?: string,
    backdrop?: string,
    poster: string | undefined,
    genres?: number[],
    popularity?: number,
    releaseDate: string,
    voteAverage?: number,
    voteCount?: number,
    onClick?: (movie: TMovie) => void,
}