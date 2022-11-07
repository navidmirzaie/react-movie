export type ResponseMovie = {
    id: number | string
    title: string | undefined,
    overview?: string,
    backdrop_path?: string,
    poster_path?: string,
    genres?: number[],
    popularity?: number,
    release_date: string,
    vote_average?: number,
    voteCount?: number,
}