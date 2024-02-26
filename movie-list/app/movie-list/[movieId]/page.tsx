"use client"
import { Suspense } from "react";
import {getMovieById} from "../Movies"
import MovieDetail from "./MovieDetail";

export default function PageDetail(props: any) {
    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <MovieDetail props={getMovieById(props.params.movieId)} />
            </Suspense>
        </div>
    )
}