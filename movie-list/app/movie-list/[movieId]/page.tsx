import MovieDetail from "./MovieDetail";

export default function PageDetail(props: any) {
    return (
        <div>
            <MovieDetail props={props.params.movieId} />
        </div>
    )
}