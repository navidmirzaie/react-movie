export type MovieType = {
    id: number | string
    title: string | "" | undefined,
    overview?: string,
    backdrop?: string,
    poster_path?: string,
    genres?: [number],
    popularity?: number,
    release_date: string,
    vote_average?: number,
    voteCount?: number,
    onSelectMovie?: (movie: MovieType) => void,
}