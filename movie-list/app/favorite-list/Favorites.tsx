"use client"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link";
import React, { Fragment, useEffect } from "react"
import styles from "../movie-list/Movies.module.css"
import { MovieList, getFavoriteMovies } from "@/utils/service";

export default function FavoritesPage() {
    const { data, refetch } = useQuery<MovieList>({
        queryKey: ['page', 1],
        queryFn: () => getFavoriteMovies(),
        staleTime: Infinity,
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            refetch();
        }, 0);

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, [])

    return (
        <Fragment>
            {
                <div>
                    <div style={{width: "100vw", height: "1px", backgroundColor: "white", position: "absolute", top: "4%"}}></div>
                    <h1 className={styles.page_header}>Favorite Movie</h1>
                    <div className={styles.movies_container}>
                        {data?.results.map((movie) => (
                            <Link key={movie.id} className={styles.movie_item} href={`/movie-list/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.original_title}
                                />
                                <div style={{ marginBottom: "10px" }} className={styles.flex90}>
                                    <h3>{movie.original_title}</h3>
                                </div>
                                <div className={styles.flexCol}>
                                    <p>Release date: {movie.release_date}</p>
                                    <p>Rating: {(Math.round(movie.vote_average * 100) / 100).toFixed(2)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            }
        </Fragment>
    )
}